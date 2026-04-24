import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Bespoke Atelier — Bade Saab" },
      {
        name: "description",
        content:
          "Book a private bespoke appointment at the Bade Saab atelier. Made-to-measure sherwani, suits and bandhgalas.",
      },
      { property: "og:title", content: "Bespoke Atelier — Bade Saab" },
      {
        property: "og:description",
        content: "Private bespoke menswear, made to measure for the gentleman of consequence.",
      },
    ],
  }),
  component: AtelierPage,
});

function AtelierPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-gold">By appointment</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl">The Bespoke Atelier</h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Step into our flagship atelier in Mumbai for a private consultation. Every garment is cut,
          stitched, and finished entirely by hand — a process that takes between 6 and 14 weeks.
        </p>

        <form className="mx-auto mt-14 grid max-w-md gap-4 text-left">
          <input
            placeholder="Full name"
            className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <input
            placeholder="Email"
            className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <input
            placeholder="Occasion (wedding, formal, festive…)"
            className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <button
            type="button"
            className="mt-2 bg-gold py-3 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:opacity-90"
          >
            Request Appointment
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}