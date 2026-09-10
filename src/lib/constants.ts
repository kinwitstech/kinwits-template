export const CONTACT_EMAIL = "hello@kinwits.com";

/** One swap point for the real meeting-booking link — mirrors the source's
 * single JS variable. Until it's set, "Book an Intro" CTAs fall back to /contact. */
export const BOOKING_URL = "#TODO-REPLACE-WITH-BOOKING-LINK";

export function bookingLinkProps(): { href: string; target?: "_blank"; rel?: "noopener" } {
  const isSet = !BOOKING_URL.startsWith("#TODO");
  return isSet ? { href: BOOKING_URL, target: "_blank", rel: "noopener" } : { href: "/contact" };
}
