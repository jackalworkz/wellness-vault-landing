import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ConsultationForm } from "./ConsultationForm";
import { useConsultation } from "./consultation-context";

export function ConsultationModal() {
  const { consultationOpen, consultationSource, closeConsultation } = useConsultation();

  return (
    <Dialog open={consultationOpen} onOpenChange={(open) => !open && closeConsultation()}>
      <DialogContent className="max-h-[92dvh] w-[calc(100vw-1.5rem)] max-w-lg overflow-y-auto rounded-xl border-border bg-background p-5 sm:p-8">
        <div className="min-w-0">
          <DialogTitle className="pr-8 font-display text-2xl font-medium leading-snug tracking-tight text-primary">
            Book Your Free Wellness Consultation
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed">
            Tell us a little about what you're looking for, and we'll use your response to
            understand how we can best guide your next step.
          </DialogDescription>
          <div className="mt-6">
            <ConsultationForm source={consultationSource} onDone={closeConsultation} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
