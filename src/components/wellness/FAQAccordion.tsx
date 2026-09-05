import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

export const FAQS = [
  {
    q: "What is Wellness Vault?",
    a: "Wellness Vault is a digital wellness resource platform that brings practical guides, educational resources, planning tools, and trackers together in one organized place.",
  },
  {
    q: "What is included?",
    a: "The collection covers nutrition and meal-planning resources, movement resources, planners and worksheets, habit trackers, and easy-to-understand wellness education.",
  },
  {
    q: "Is Wellness Vault digital?",
    a: "Yes. Wellness Vault is a digital collection, so you can open the resources on your phone, tablet, or computer.",
  },
  {
    q: "What is included in the free guide?",
    a: "The free wellness guide is a short, practical resource to help you create a more organized wellness routine and decide where to begin.",
  },
  {
    q: "What happens during the free consultation?",
    a: "It's an introductory conversation about what you'd like to work on, so we can point you toward the Wellness Vault resources that fit your situation.",
  },
  {
    q: "How long is the consultation?",
    a: "It's a short introductory conversation. We'll confirm the timing with you when we respond to your request.",
  },
  {
    q: "Can I use the resources digitally?",
    a: "Yes. The resources are designed to be used digitally on the device you already use day to day.",
  },
  {
    q: "Can I print the resources?",
    a: "Yes. Printable resources such as planners and worksheets are included so you can work on paper if you prefer.",
  },
  {
    q: "Who is Wellness Vault designed for?",
    a: "It's designed for anyone who wants a clearer starting point, more structure, and practical resources for building healthier everyday routines.",
  },
  {
    q: "Is Wellness Vault medical advice?",
    a: "No. Wellness Vault is educational and organizational only. It is not medical advice and does not diagnose, treat, cure, or prevent any condition. Speak with a qualified healthcare professional about medical questions.",
  },
];

export function FAQAccordion() {
  return (
    <section id="faq" className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-sans text-base font-bold text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
