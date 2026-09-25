import { useCallback, type ReactNode } from "react";
import { BOOKING_URL } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

/** Injected on first click only, so nothing reaches Calendly until someone
 * actually books. Shared across every button on the page. */
let assetsPromise: Promise<void> | null = null;

function loadCalendlyAssets(): Promise<void> {
  if (assetsPromise) return assetsPromise;

  assetsPromise = new Promise<void>((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = WIDGET_CSS;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      // Let the next click retry rather than caching the failure forever.
      assetsPromise = null;
      reject(new Error("Calendly widget failed to load"));
    };
    document.head.appendChild(script);
  });

  return assetsPromise;
}

/** Calendly posts this to the opener once a booking completes. One listener
 * serves every button, and it lives for the page's lifetime. */
let listening = false;

function listenForBooking() {
  if (listening) return;
  listening = true;

  window.addEventListener("message", (e: MessageEvent) => {
    if (e.origin !== "https://calendly.com") return;
    const data = e.data as { event?: string } | null;
    if (data?.event !== "calendly.event_scheduled") return;
    toast({ title: "You're booked. Check your email for the Teams invite." });
  });
}

export interface BookIntroButtonProps {
  /** Left undefined for the footer's bare text link. */
  className?: string;
  /** Defaults to the labelled arrow CTA; the footer passes plain text. */
  children?: ReactNode;
  /** Where to go while BOOKING_URL is empty. */
  fallbackHref?: string;
}

/**
 * The single entry point for every "Book an Intro" CTA.
 *
 * With no BOOKING_URL it renders exactly what the old bookingLinkProps() did:
 * a plain anchor to `fallbackHref`. With one set, the anchor keeps the booking
 * URL as its no-JavaScript fallback and the click opens the Calendly popup
 * instead.
 */
export function BookIntroButton({
  className,
  children = (
    <>
      Book an Intro <span className="arr">&rarr;</span>
    </>
  ),
  fallbackHref = "/contact",
}: BookIntroButtonProps) {
  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle new-tab/modified clicks itself.
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    listenForBooking();
    loadCalendlyAssets()
      .then(() => {
        if (window.Calendly) window.Calendly.initPopupWidget({ url: BOOKING_URL });
        else window.open(BOOKING_URL, "_blank", "noopener");
      })
      .catch(() => window.open(BOOKING_URL, "_blank", "noopener"));
  }, []);

  if (!BOOKING_URL) {
    return (
      <a className={className} href={fallbackHref}>
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={BOOKING_URL} target="_blank" rel="noopener" onClick={onClick}>
      {children}
    </a>
  );
}
