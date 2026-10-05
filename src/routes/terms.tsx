import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose, pageHead } from "@/components/wellness/PageShell";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "/terms",
      "Terms of Use | Wellness Vault",
      "The terms that apply when you use the Wellness Vault website and its educational wellness resources.",
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell eyebrow="Legal" title="Terms of Use" intro="Last updated: October 2026">
      <Prose>
        <section>
          <h2>Using this website</h2>
          <p>
            By using the Wellness Vault website, you agree to use it for lawful, personal purposes
            and to provide accurate information when you submit a request.
          </p>
        </section>
        <section>
          <h2>Educational purpose</h2>
          <p>
            All resources are provided for general educational and organizational purposes only.
            They are not medical advice. See our Disclaimer for more detail.
          </p>
        </section>
        <section>
          <h2>Content ownership</h2>
          <p>
            Wellness Vault resources are for your personal use. Please don't resell, redistribute,
            or republish them without permission.
          </p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. The date above shows the latest version.</p>
        </section>
      </Prose>
    </PageShell>
  );
}
