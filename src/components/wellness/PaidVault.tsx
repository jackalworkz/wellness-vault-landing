import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CTAButton } from "./CTAButton";
import { useConsultation } from "./consultation-context";
import { trackEvent } from "@/lib/analytics";

const includes = [
  "Wellness resources",
  "Educational guides",
  "Planning tools",
  "Recipes",
  "Movement resources",
  "Trackers",
  "Printable resources",
];

export function PaidVault() {
  const { openConsultation } = useConsultation();

  return (
    <section id="vault-offer" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <SectionHeading
          eyebrow="The Full Vault"
          tone="dark"
          align="left"
          title="Everything You Need to Organize Your Wellness Journey."
          description="One organized collection of practical wellness resources, made to be used in everyday life."
        />
        <div className="min-w-0 rounded-xl border border-ivory/15 bg-ivory/5 p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-2 text-sm text-ivory/90">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              size="lg"
              variant="onDark"
              onClick={() => trackEvent("wellness_vault_clicked", { source: "vault_offer" })}
            >
              Explore Wellness Vault
            </CTAButton>
            <CTAButton
              size="lg"
              variant="onDarkOutline"
              data-action="book-consultation"
              onClick={() => openConsultation("vault_offer")}
            >
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
