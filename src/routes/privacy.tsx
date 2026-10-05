import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose, pageHead } from "@/components/wellness/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "/privacy",
      "Privacy Policy | Wellness Vault",
      "How Wellness Vault collects, uses, and protects the information you share through our website.",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy" intro="Last updated: October 2026">
      <Prose>
        <section>
          <h2>Information we collect</h2>
          <p>
            When you request a consultation, we collect your name, phone number, email address,
            and the reason you share for booking. We ask only for what we need to respond.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <ul>
            <li>To review and respond to your consultation request</li>
            <li>To share relevant Wellness Vault resources you've asked about</li>
            <li>To improve our website and resources</li>
          </ul>
        </section>
        <section>
          <h2>What we don't do</h2>
          <p>
            We don't sell your personal information, and we don't ask for detailed health or
            medical information.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct, or delete the information you've shared with us by
            submitting a request through our contact page.
          </p>
        </section>
      </Prose>
    </PageShell>
  );
}
