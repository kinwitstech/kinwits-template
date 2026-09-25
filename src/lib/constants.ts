export const CONTACT_EMAIL = "hello@kinwits.com";

/** Real meeting-booking link, supplied per environment via VITE_BOOKING_URL.
 * While it is empty, every Intro CTA falls back to /contact and no Calendly
 * asset is requested. Always render Intro CTAs through <BookIntroButton>,
 * which owns that fallback and the popup. */
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL ?? "";
