import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose, pageHead } from "@/components/wellness/PageShell";
import { ConsultationCTA } from "@/components/wellness/ConsultationCTA";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "/contact",
      "Contact Wellness Vault",
      "Get in touch with Wellness Vault. Book a free introductory consultation and we'll review your request and share the next steps.",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get in Touch"
      intro="The simplest way to reach us is through a free introductory consultation request."
    >
      <Prose>
        <section>
          <h2>How it works</h2>
          <p>
            Share your name, phone number, email, and what you'd like to discuss. We'll review
            your request and get back to you with the next steps.
          </p>
        </section>
        <section>
          <h2>Before you reach out</h2>
          <p>
            Please don't include detailed medical information. Wellness Vault offers educational
            wellness resources and is not a substitute for advice from a qualified healthcare
            professional.
          </p>
        </section>
      </Prose>
      <ConsultationCTA source="contact_page" title="Send us a consultation request" />
    </PageShell>
  );
}
