import { FileText, CalendarDays, Utensils, LineChart, GraduationCap, ClipboardCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: FileText, title: "Wellness Guide", body: "Step-by-step starting points" },
  { icon: CalendarDays, title: "Planner", body: "Weekly routine layouts" },
  { icon: Utensils, title: "Recipe Pages", body: "Simple, practical meals" },
  { icon: LineChart, title: "Tracker", body: "Habit and consistency logs" },
  { icon: GraduationCap, title: "Educational Pages", body: "Clear wellness basics" },
  { icon: ClipboardCheck, title: "Worksheets", body: "Reflection and planning prompts" },
];

export function ProductShowcase() {
  return (
    <section id="showcase" className="bg-sage-soft/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the Collection"
          title="A Closer Look at the Resources"
          description="A preview of the formats included in Wellness Vault."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, title, body }) => (
            <li key={title} className="min-w-0">
              <div className="relative flex aspect-3/4 flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <span className="absolute inset-y-0 left-0 w-1.5 bg-sage/40" aria-hidden="true" />
                <div className="space-y-1.5 pl-1" aria-hidden="true">
                  <span className="block h-1.5 w-3/4 rounded-full bg-secondary" />
                  <span className="block h-1.5 w-1/2 rounded-full bg-secondary" />
                  <span className="block h-1.5 w-2/3 rounded-full bg-secondary" />
                </div>
                <Icon className="mx-auto size-7 text-sage" aria-hidden="true" />
                <span className="pl-1 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                  Preview
                </span>
              </div>
              <p className="mt-3 text-sm font-bold text-primary">{title}</p>
              <p className="text-xs text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
