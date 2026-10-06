import { useState } from "react";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CTAButton } from "./CTAButton";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { useConsultation, type ResourceKey } from "./consultation-context";
import { cn } from "@/lib/utils";

const intro: Record<ResourceKey, { title: string; body: string }> = {
  guide: {
    title: "Get the Free Wellness Guide",
    body: "A short practical guide to help you create a more organized wellness routine. Tell us where to send it.",
  },
  ebook: {
    title: "Get the Free Wellness eBook",
    body: "A deeper, easy-to-read educational resource on everyday wellness. Tell us where to send it.",
  },
  tool: {
    title: "Free Wellness Tool — Coming Soon",
    body: "We're building a simple interactive tool to help you find a useful starting point.",
  },
  session: {
    title: "Free Wellness Session",
    body: "An educational introductory session on building simple, organized wellness routines.",
  },
  checkup: {
    title: "Free Wellness Checkup",
    body: "A short, general self-reflection to check in with your everyday routines.",
  },
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
          <Check className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ToolPreview({ onConsult, onClose }: { onConsult: () => void; onClose: () => void }) {
  return (
    <div className="space-y-6">
      <p className="eyebrow text-gold">Preview</p>
      <Bullets
        items={[
          "Answer a few quick questions about your routines",
          "See which Wellness Vault area may be a helpful place to start",
          "Get pointed to the matching guides and planners",
        ]}
      />
      <p className="text-sm text-muted-foreground">
        The tool isn't live yet. A free consultation is the quickest way to find your starting point
        today.
      </p>
      <div className="flex flex-col gap-3">
        <CTAButton full onClick={onConsult}>Book a Free Consultation</CTAButton>
        <CTAButton full variant="outline" onClick={onClose}>Keep Exploring</CTAButton>
      </div>
    </div>
  );
}

function SessionInfo({ onDone }: { onDone: () => void }) {
  return (
    <div className="space-y-6">
      <Bullets
        items={[
          "Educational and introductory — not medical advice",
          "Covers practical ways to organize everyday routines",
          "Free to join, with no obligation",
        ]}
      />
      <p className="text-sm text-muted-foreground">
        Session dates haven't been published yet. Leave your details and we'll let you know when
        they're available.
      </p>
      <LeadCaptureForm
        resource="session"
        submitLabel="Notify Me About Sessions"
        successTitle="You're on the list."
        successBody="We'll let you know when free session dates are announced."
        onDone={onDone}
      />
    </div>
  );
}

const prompts = [
  { q: "How organized do your daily routines feel right now?", options: ["Quite organized", "Somewhat", "Not very"] },
  { q: "Which area would you most like to explore?", options: ["Nutrition", "Movement", "Planning & tracking"] },
  { q: "What would help you most right now?", options: ["A clear starting point", "More structure", "Simpler information"] },
];

function CheckupFlow({ onConsult, onClose }: { onConsult: () => void; onClose: () => void }) {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);

  if (step === -1) {
    return (
      <div className="space-y-6">
        <Bullets
          items={[
            "Three quick, general reflection questions",
            "No scores, ratings, or health assessments",
            "Nothing you answer is saved or sent",
          ]}
        />
        <p className="text-xs leading-relaxed text-muted-foreground">
          This is a general wellness self-reflection, not a medical checkup. It doesn't diagnose,
          assess health risk, or replace advice from a qualified professional.
        </p>
        <CTAButton full onClick={() => setStep(0)}>Begin the Check-In</CTAButton>
      </div>
    );
  }

  if (step >= prompts.length) {
    return (
      <div className="space-y-5" role="status">
        <h3 className="text-xl text-primary">Thanks for checking in.</h3>
        <p className="text-sm text-muted-foreground">Here's what you reflected on:</p>
        <ul className="space-y-2 rounded-lg border border-border bg-card p-4 text-sm">
          {prompts.map((p, i) => (
            <li key={p.q} className="min-w-0">
              <span className="text-muted-foreground">{p.q}</span>{" "}
              <strong className="text-primary">{answers[i]}</strong>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          If you'd like help turning this into a next step, a free consultation is a good place to
          talk it through.
        </p>
        <div className="flex flex-col gap-3">
          <CTAButton full onClick={onConsult}>Book a Free Consultation</CTAButton>
          <CTAButton full variant="outline" onClick={onClose}>Keep Exploring</CTAButton>
        </div>
      </div>
    );
  }

  const prompt = prompts[step]!;
  return (
    <fieldset className="space-y-4">
      <legend className="text-xs font-bold uppercase tracking-widest text-sage">
        Question {step + 1} of {prompts.length}
      </legend>
      <p className="font-display text-lg leading-snug text-primary">{prompt.q}</p>
      <div className="grid gap-2">
        {prompt.options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setAnswers((a) => [...a.slice(0, step), option]);
              setStep(step + 1);
            }}
            className={cn(
              "min-h-12 rounded-md border border-border bg-card px-4 text-left text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-primary",
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {step > 0 ? (
        <CTAButton variant="ghost" size="sm" onClick={() => setStep(step - 1)}>
          Back
        </CTAButton>
      ) : null}
    </fieldset>
  );
}

export function ResourceModal() {
  const { resource, closeResource, openConsultation } = useConsultation();
  const content = resource ? intro[resource] : null;
  const toConsult = () => {
    closeResource();
    openConsultation(`resource_modal_${resource ?? "unknown"}`);
  };

  return (
    <Dialog open={resource !== null} onOpenChange={(open) => !open && closeResource()}>
      <DialogContent className="max-h-[92dvh] w-[calc(100vw-1.5rem)] max-w-md overflow-y-auto rounded-xl border-border bg-background p-5 sm:p-8">
        <div className="min-w-0">
          <DialogTitle className="pr-8 font-display text-2xl font-medium leading-snug tracking-tight text-primary">
            {content?.title ?? "Free Resource"}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed">{content?.body}</DialogDescription>
          <div className="mt-6">
            {resource === "guide" ? (
              <LeadCaptureForm
                resource="guide"
                submitLabel="Send Me the Free Guide"
                successTitle="Thank you — your request has been received."
                successBody="We'll send the Free Wellness Guide to your inbox as soon as it's ready."
                onDone={closeResource}
              />
            ) : null}
            {resource === "ebook" ? (
              <LeadCaptureForm
                resource="ebook"
                submitLabel="Send Me the Free eBook"
                successTitle="Thank you — your request has been received."
                successBody="We'll send the Free Wellness eBook to your inbox as soon as it's ready."
                onDone={closeResource}
              />
            ) : null}
            {resource === "tool" ? <ToolPreview onConsult={toConsult} onClose={closeResource} /> : null}
            {resource === "session" ? <SessionInfo onDone={closeResource} /> : null}
            {resource === "checkup" ? <CheckupFlow onConsult={toConsult} onClose={closeResource} /> : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
