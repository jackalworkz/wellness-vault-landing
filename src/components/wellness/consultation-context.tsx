import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export type ResourceKey = "guide" | "tool" | "ebook" | "session" | "checkup";

type ConsultationContextValue = {
  consultationOpen: boolean;
  consultationSource: string;
  openConsultation: (source: string) => void;
  closeConsultation: () => void;
  resource: ResourceKey | null;
  openResource: (resource: ResourceKey, source: string) => void;
  closeResource: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

const resourceEvents = {
  guide: "free_guide_clicked",
  tool: "free_tool_clicked",
  ebook: "free_ebook_clicked",
  session: "free_session_clicked",
  checkup: "free_checkup_clicked",
} as const;

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationSource, setConsultationSource] = useState("unknown");
  const [resource, setResource] = useState<ResourceKey | null>(null);

  const openConsultation = useCallback((source: string) => {
    setConsultationSource(source);
    setConsultationOpen(true);
    trackEvent("consultation_cta_clicked", { source });
    trackEvent("consultation_form_opened", { source });
  }, []);

  const openResource = useCallback((key: ResourceKey, source: string) => {
    setResource(key);
    trackEvent(resourceEvents[key], { source });
  }, []);

  const value = useMemo(
    () => ({
      consultationOpen,
      consultationSource,
      openConsultation,
      closeConsultation: () => setConsultationOpen(false),
      resource,
      openResource,
      closeResource: () => setResource(null),
    }),
    [consultationOpen, consultationSource, openConsultation, resource, openResource],
  );

  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used inside ConsultationProvider");
  return ctx;
}
