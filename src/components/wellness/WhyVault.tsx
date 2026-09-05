import { Feather, Wrench, Boxes, Lightbulb } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: Feather, title: "Simple", body: "Clear resources without unnecessary complexity." },
  { icon: Wrench, title: "Practical", body: "Tools designed for everyday use." },
  { icon: Boxes, title: "Organized", body: "Resources brought together in one place." },
  {
    icon: Lightbulb,
    title: "Educational",
    body: "Focused on understanding and informed everyday choices.",
  },
];

export function WhyVault() {
  return (
    <section id="why" className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Wellness Vault" title="Wellness Doesn't Need to Feel Complicated." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="min-w-0 rounded-xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-soft"
            >
              <Icon className="size-5 text-sage" aria-hidden="true" />
              <h3 className="mt-4 text-lg text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
