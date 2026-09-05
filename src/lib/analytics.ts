export type ConversionEvent =
  | "consultation_cta_clicked"
  | "consultation_form_opened"
  | "consultation_form_started"
  | "consultation_form_submitted"
  | "free_guide_clicked"
  | "free_tool_clicked"
  | "free_ebook_clicked"
  | "free_session_clicked"
  | "free_checkup_clicked"
  | "wellness_vault_clicked";

type Payload = Record<string, string | number | boolean | undefined>;

/**
 * Central conversion-event hook. No analytics provider is configured yet:
 * set VITE_ANALYTICS_ENABLED and wire a provider here later (dataLayer, Plausible, etc.).
 */
export function trackEvent(event: ConversionEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const enabled = import.meta.env["VITE_ANALYTICS_ENABLED"] === "true";
  const w = window as unknown as { dataLayer?: unknown[] };
  if (enabled && Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...payload });
  } else if (import.meta.env.DEV) {
    console.info("[analytics]", event, payload);
  }
}
