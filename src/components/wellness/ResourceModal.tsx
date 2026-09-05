import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CTAButton } from "./CTAButton";
import { useConsultation, type ResourceKey } from "./consultation-context";

const copy: Record<ResourceKey, { title: string; body: string }> = {
  guide: {
    title: "Free Wellness Guide",
    body: "The free guide is being prepared for delivery. Once it's connected, requesting it here will send it straight to your inbox.",
  },
  tool: {
    title: "Free Wellness Tool",
    body: "The interactive starting-point tool is being prepared. It will open right here once it's connected.",
  },
  ebook: {
    title: "Free Wellness eBook",
    body: "The educational eBook is being prepared for delivery. Once it's connected, you'll be able to request it here.",
  },
  session: {
    title: "Free Wellness Session",
    body: "Session dates are being scheduled. Once they're published, you'll be able to reserve a place here.",
  },
  checkup: {
    title: "Free Wellness Checkup",
    body: "The wellness reflection experience is being prepared and will open here once it's connected.",
  },
};

export function ResourceModal() {
  const { resource, closeResource, openConsultation } = useConsultation();
  const content = resource ? copy[resource] : null;

  return (
    <Dialog open={resource !== null} onOpenChange={(open) => !open && closeResource()}>
      <DialogContent className="max-h-[92dvh] w-[calc(100vw-1.5rem)] max-w-md overflow-y-auto rounded-xl border-border bg-background p-5 sm:p-8">
        <DialogTitle className="pr-8 font-display text-xl font-medium leading-snug tracking-tight text-primary">
          {content?.title ?? "Free Resource"}
        </DialogTitle>
        <DialogDescription className="mt-2 text-sm leading-relaxed">
          {content?.body}
        </DialogDescription>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          In the meantime, a free introductory consultation is the quickest way to find the right
          starting point for you.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <CTAButton
            full
            onClick={() => {
              closeResource();
              openConsultation(`resource_modal_${resource ?? "unknown"}`);
            }}
          >
            Book a Free Consultation
          </CTAButton>
          <CTAButton variant="outline" full onClick={closeResource}>
            Keep Exploring
          </CTAButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
