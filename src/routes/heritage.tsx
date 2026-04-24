import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage — Bade Saab" },
      {
        name: "description",
        content:
          "The story of Bade Saab — a house of heritage menswear honouring the artisanship of Lucknow, Varanasi and Agra.",
      },
      { property: "og:title", content: "Heritage — Bade Saab" },
      {
        property: "og:description",
        content: "A house of heritage menswear honouring centuries of Indian craftsmanship.",
      },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/40 bg-radial-gold">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">Since the first stitch</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            A house built on <span className="text-gradient-gold">consequence</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Bade Saab is not a label. It is a posture, a presence, an inheritance. We design for the
            gentleman who arrives with quiet authority — and leaves a story behind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Lucknow",
              body: "Chikankari and zardozi by karigars whose families have stitched for nawabs across six generations.",
            },
            {
              num: "02",
              title: "Varanasi",
              body: "Banarasi silks woven on pit looms — pure mulberry, real zari, and motifs older than memory.",
            },
            {
              num: "03",
              title: "Agra",
              body: "Goodyear-welted leatherwork from masters who once shod the cavalry of the Mughal court.",
            },
          ].map((c) => (
            <div key={c.num}>
              <p className="font-display text-5xl text-gold">{c.num}</p>
              <h3 className="mt-4 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}