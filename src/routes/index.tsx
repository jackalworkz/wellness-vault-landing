import { createFileRoute } from "@tanstack/react-router";
import { ConsultationProvider } from "@/components/wellness/consultation-context";
import { ConsultationModal } from "@/components/wellness/ConsultationModal";
import { ResourceModal } from "@/components/wellness/ResourceModal";
import { Header } from "@/components/wellness/Header";
import { Hero } from "@/components/wellness/Hero";
import { BenefitStrip } from "@/components/wellness/BenefitStrip";
import { ProblemSection } from "@/components/wellness/ProblemSection";
import { SolutionSection } from "@/components/wellness/SolutionSection";
import { VaultSection } from "@/components/wellness/VaultSection";
import { FreeResources } from "@/components/wellness/FreeResources";
import { HowItWorks } from "@/components/wellness/HowItWorks";
import { WhyVault } from "@/components/wellness/WhyVault";
import { WhoItsFor } from "@/components/wellness/WhoItsFor";
import { ProductShowcase } from "@/components/wellness/ProductShowcase";
import { Testimonials } from "@/components/wellness/Testimonials";
import { PaidVault } from "@/components/wellness/PaidVault";
import { FAQAccordion, FAQS } from "@/components/wellness/FAQAccordion";
import { FinalCTA } from "@/components/wellness/FinalCTA";
import { Footer } from "@/components/wellness/Footer";

const TITLE = "Wellness Vault | Practical Wellness Resources & Guidance";
const DESCRIPTION =
  "Explore Wellness Vault for practical wellness guides, planning tools, educational resources, and a free introductory consultation designed to help you build more organized everyday routines.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Wellness Vault",
              description:
                "A digital wellness resource platform offering practical guides, educational resources, planning tools, and trackers.",
            },
            {
              "@type": "WebSite",
              name: "Wellness Vault",
              description: DESCRIPTION,
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <ConsultationProvider>
      <Header />
      <main>
        <Hero />
        <BenefitStrip />
        <ProblemSection />
        <SolutionSection />
        <VaultSection />
        <FreeResources />
        <HowItWorks />
        <WhyVault />
        <WhoItsFor />
        <ProductShowcase />
        <Testimonials />
        <PaidVault />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <ConsultationModal />
      <ResourceModal />
    </ConsultationProvider>
  );
}
