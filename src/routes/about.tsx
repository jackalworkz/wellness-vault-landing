import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose, pageHead } from "@/components/wellness/PageShell";
import { ConsultationCTA } from "@/components/wellness/ConsultationCTA";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "/about",
      "About Wellness Vault | Practical, Organized Wellness",
      "Learn what Wellness Vault is, who it's for, and how it brings practical wellness resources together in one organized place.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Wellness Vault"
      intro="A digital wellness resource platform that makes learning, planning, and building healthier everyday routines simpler."
    >
      <Prose>
        <section>
          <h2>Why Wellness Vault exists</h2>
          <p>
            Wellness information is everywhere, but a clear path rarely is. Wellness Vault brings
            practical guides, educational resources, planners, recipes, movement resources, and
            trackers together in one organized place, so it's easier to know where to start.
          </p>
        </section>
        <section>
          <h2>What we focus on</h2>
          <ul>
            <li>Clear, easy-to-understand wellness education</li>
            <li>Practical tools designed for everyday use</li>
            <li>Structure and organization rather than overwhelm</li>
            <li>Welcoming, non-judgmental guidance for real life</li>
          </ul>
        </section>
        <section>
          <h2>What we don't do</h2>
          <p>
            Wellness Vault is educational and organizational. We don't provide medical advice,
            diagnose, or treat any condition, and we don't promise specific health outcomes.
          </p>
        </section>
      </Prose>
      <ConsultationCTA source="about_page" />
    </PageShell>
  );
}
