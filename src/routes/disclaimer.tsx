import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose, pageHead } from "@/components/wellness/PageShell";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    pageHead(
      "/disclaimer",
      "Disclaimer | Wellness Vault",
      "Wellness Vault provides educational wellness resources only. It is not medical advice and does not diagnose or treat any condition.",
    ),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <PageShell eyebrow="Legal" title="Disclaimer" intro="Please read this before using our resources.">
      <Prose>
        <section>
          <h2>Not medical advice</h2>
          <p>
            Wellness Vault provides general educational and organizational wellness resources. It
            is not medical advice and is not intended to diagnose, treat, cure, or prevent any
            disease or condition.
          </p>
        </section>
        <section>
          <h2>Talk to a professional</h2>
          <p>
            Always speak with a qualified healthcare professional before making changes to your
            diet, movement, or health routines, especially if you have a medical condition.
          </p>
        </section>
        <section>
          <h2>No guaranteed outcomes</h2>
          <p>
            Everyone's circumstances are different. We don't promise or guarantee any specific
            health, fitness, or weight outcome.
          </p>
        </section>
      </Prose>
    </PageShell>
  );
}
