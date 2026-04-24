import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/hero-bade-saab.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bade Saab — Heritage Menswear for the Gentleman of Consequence" },
      {
        name: "description",
        content:
          "Bade Saab crafts heritage menswear — sherwani, kurta, three-piece suits and bandhgala — by the master karigars of Lucknow, Varanasi and Agra.",
      },
      { property: "og:title", content: "Bade Saab — Heritage Menswear" },
      {
        property: "og:description",
        content: "Hand-crafted sherwani, suits and bandhgala for the gentleman of consequence.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 3);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[88vh] md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center px-6 py-20 md:col-span-6 md:px-16 lg:px-24">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              Autumn / Winter Atelier
            </p>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              The gentleman <br />
              of <span className="italic text-gradient-gold">consequence</span>.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Heritage menswear, hand-crafted in India. From the karkhanas of Lucknow to the looms
              of Varanasi — couture for the man who is awaited.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/collection" search={{ q: "" }}
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
              >
                Enter the Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/atelier"
                className="text-[11px] uppercase tracking-[0.3em] text-foreground underline-offset-8 hover:text-gold hover:underline"
              >
                Bespoke Appointment
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-border/40 pt-8 text-xs text-muted-foreground">
              <div>
                <p className="font-display text-2xl text-gold">320+</p>
                <p className="mt-1 uppercase tracking-[0.2em]">Hand hours</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold">VI</p>
                <p className="mt-1 uppercase tracking-[0.2em]">Generations</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold">III</p>
                <p className="mt-1 uppercase tracking-[0.2em]">Karkhanas</p>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-6">
            <img
              src={heroImg}
              alt="Bade Saab — gentleman in royal black sherwani with gold zardozi"
              width={1080}
              height={1920}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-background/40" />
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-border/40 bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-y-3 px-6 py-5 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span>· Hand-stitched in India ·</span>
          <span>· Complimentary worldwide shipping ·</span>
          <span>· Bespoke from 6 weeks ·</span>
          <span>· Six generations of craft ·</span>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The Signature Trio</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Pieces of consequence</h2>
          </div>
          <Link
            to="/collection" search={{ q: "" }}
            className="hidden text-[11px] uppercase tracking-[0.3em] text-gold hover:underline md:inline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Heritage band */}
      <section className="border-t border-border/40 bg-gradient-onyx">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Aadab — Welcome</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              A house older <br />
              than the brand.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              Bade Saab is a tribute to the men who arrived first and stayed longest — the patriarch
              at the door, the host at the head of the table, the gentleman whose word held weight.
            </p>
            <p className="leading-relaxed">
              Every garment is cut in our Mumbai atelier and embroidered by master karigars whose
              families have served India's noble houses for six generations. We do not chase trends.
              We make heirlooms.
            </p>
            <Link
              to="/heritage"
              className="inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-foreground hover:border-foreground"
            >
              Read our heritage →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-display text-3xl italic leading-relaxed md:text-4xl">
          "I have been measured by tailors across Savile Row and Milan. None understood the
          shoulder of an Indian gentleman like Bade Saab."
        </p>
        <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-gold">
          — A patron of the house
        </p>
      </section>
    </SiteLayout>
  );
}
