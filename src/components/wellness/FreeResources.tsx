import { FileText, MousePointerClick, BookMarked, Video, HeartPulse, CalendarClock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CTAButton } from "./CTAButton";
import { useConsultation, type ResourceKey } from "./consultation-context";
import { cn } from "@/lib/utils";

type Resource = {
  key: ResourceKey | "consultation";
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
};

const resources: Resource[] = [
  {
    key: "guide",
    icon: FileText,
    title: "Free Wellness Guide",
    body: "A short practical guide to help create a more organized wellness routine.",
    cta: "Get the Free Guide",
  },
  {
    key: "tool",
    icon: MousePointerClick,
    title: "Free Wellness Tool",
    body: "An interactive tool designed to help visitors identify a useful starting point.",
    cta: "Try the Free Tool",
  },
  {
    key: "ebook",
    icon: BookMarked,
    title: "Free Wellness eBook",
    body: "A deeper educational wellness resource.",
    cta: "Get the Free eBook",
  },
  {
    key: "session",
    icon: Video,
    title: "Free Wellness Session",
    body: "An introductory educational session.",
    cta: "Join the Free Session",
  },
  {
    key: "checkup",
    icon: HeartPulse,
    title: "Free Wellness Checkup",
    body: "A simple wellness reflection experience.",
    cta: "Start the Free Checkup",
  },
  {
    key: "consultation",
    icon: CalendarClock,
    title: "Free Consultation",
    body: "A personalized introductory conversation.",
    cta: "Book Free Consultation",
  },
];

export function FreeResources() {
  const { openConsultation, openResource } = useConsultation();

  return (
    <section id="free-resources" className="bg-sage-soft/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start Free"
          title="Start With Something Free"
          description="Choose the resource that matches where you are today."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const isConsultation = resource.key === "consultation";
            const Icon = resource.icon;
            return (
              <article
                key={resource.key}
                className={cn(
                  "flex min-w-0 flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
                  isConsultation
                    ? "border-primary bg-primary text-primary-foreground shadow-lift"
                    : "border-border bg-card hover:shadow-soft",
                )}
              >
                {isConsultation ? (
                  <span className="eyebrow text-gold">Recommended</span>
                ) : (
                  <Icon className="size-5 text-sage" aria-hidden="true" />
                )}
                <h3
                  className={cn(
                    "mt-4 text-lg leading-snug",
                    isConsultation ? "text-ivory" : "text-primary",
                  )}
                >
                  {resource.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 flex-1 text-sm leading-relaxed",
                    isConsultation ? "text-ivory/80" : "text-muted-foreground",
                  )}
                >
                  {resource.body}
                </p>
                <CTAButton
                  className="mt-6"
                  full
                  variant={isConsultation ? "onDark" : "outline"}
                  data-action={isConsultation ? "book-consultation" : undefined}
                  onClick={() =>
                    isConsultation
                      ? openConsultation("free_resources")
                      : openResource(resource.key as ResourceKey, "free_resources")
                  }
                >
                  {resource.cta}
                </CTAButton>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
