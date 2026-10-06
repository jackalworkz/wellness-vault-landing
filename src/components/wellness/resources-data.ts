import type { ResourceKey } from "./consultation-context";

export type FreeResourceInfo = {
  key: ResourceKey | "consultation";
  title: string;
  what: string;
  forWho: string;
  benefit: string;
  cta: string;
};

export const FREE_RESOURCES: FreeResourceInfo[] = [
  {
    key: "guide",
    title: "Free Wellness Guide",
    what: "A short practical guide to help create a more organized wellness routine.",
    forWho: "Anyone looking for a clear place to begin.",
    benefit: "Simple first steps you can use this week.",
    cta: "Get the Free Guide",
  },
  {
    key: "tool",
    title: "Free Wellness Tool",
    what: "An interactive tool designed to help you identify a useful starting point.",
    forWho: "People unsure which area to focus on first.",
    benefit: "Narrow down where to put your attention.",
    cta: "Try the Free Tool",
  },
  {
    key: "ebook",
    title: "Free Wellness eBook",
    what: "A deeper educational wellness resource.",
    forWho: "Readers who enjoy learning the why behind habits.",
    benefit: "Understand wellness basics in plain language.",
    cta: "Get the Free eBook",
  },
  {
    key: "session",
    title: "Free Wellness Session",
    what: "An introductory educational session.",
    forWho: "People who prefer learning by listening along.",
    benefit: "A guided overview of building simple routines.",
    cta: "Join the Free Session",
  },
  {
    key: "checkup",
    title: "Free Wellness Checkup",
    what: "A simple wellness reflection experience.",
    forWho: "Anyone wanting a moment to check in with their routines.",
    benefit: "Notice what's working and what to explore next.",
    cta: "Start the Free Checkup",
  },
  {
    key: "consultation",
    title: "Free Consultation",
    what: "A personalized introductory conversation.",
    forWho: "People who'd like help choosing where to start.",
    benefit: "A suggested next step that fits your situation.",
    cta: "Book Free Consultation",
  },
];
