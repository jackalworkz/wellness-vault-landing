import { createFileRoute } from "@tanstack/react-router";
import { PageShell, pageHead } from "@/components/wellness/PageShell";
import { CTAButton } from "@/components/wellness/CTAButton";
import { ConsultationCTA } from "@/components/wellness/ConsultationCTA";
import { useConsultation, type ResourceKey } from "@/components/wellness/consultation-context";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead(
      "/resources",
      "Free Wellness Resources | Wellness Vault",
      "Explore Wellness Vault's free resources: a wellness guide, tool, eBook, introductory session, and wellness checkup.",
    ),
  component: ResourcesPage,
});

const items: { key: ResourceKey; title: string; body: string; cta: string }[] = [
  { key: "guide", title: "Free Wellness Guide", body: "A short practical guide to help create a more organized wellness routine.", cta: "Get the Free Guide" },
  { key: "tool", title: "Free Wellness Tool", body: "An interactive tool designed to help you identify a useful starting point.", cta: "Try the Free Tool" },
  { key: "ebook", title: "Free Wellness eBook", body: "A deeper educational wellness resource.", cta: "Get the Free eBook" },
  { key: "session", title: "Free Wellness Session", body: "An introductory educational session.", cta: "Join the Free Session" },
  { key: "checkup", title: "Free Wellness Checkup", body: "A simple wellness reflection experience.", cta: "Start the Free Checkup" },
];

function ResourcesPage() {
  const { openResource } = useConsultation();
  return (
    <PageShell
      eyebrow="Resources"
      title="Free Wellness Resources"
      intro="Choose the resource that matches where you are today."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.key} className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg text-primary">{item.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            <CTAButton variant="outline" full className="mt-5" onClick={() => openResource(item.key, "resources_page")}>
              {item.cta}
            </CTAButton>
          </li>
        ))}
      </ul>
      <ConsultationCTA source="resources_page" title="Prefer a personal starting point?" />
    </PageShell>
  );
}
