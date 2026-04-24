import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bade Saab" },
      {
        name: "description",
        content: "Reach the Bade Saab atelier — phone, email, and Mumbai flagship address.",
      },
      { property: "og:title", content: "Contact — Bade Saab" },
      {
        property: "og:description",
        content: "Reach the Bade Saab atelier in Mumbai for bespoke and private appointments.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/40 bg-radial-gold">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">In conversation</p>
          <h1 className="mt-5 font-display text-5xl md:text-6xl">Reach the house</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our concierge is at your service for bespoke enquiries, alterations, and private
            appointments.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-3">
        {[
          {
            icon: MapPin,
            label: "Atelier",
            lines: ["12 Khotachiwadi Lane", "Girgaon, Mumbai 400004"],
          },
          {
            icon: Phone,
            label: "Concierge",
            lines: ["+91 22 4000 8000", "Mon — Sat · 11am to 8pm IST"],
          },
          {
            icon: Mail,
            label: "Correspondence",
            lines: ["concierge@badesaab.in", "bespoke@badesaab.in"],
          },
        ].map((c) => (
          <div key={c.label} className="border border-border/60 p-8">
            <c.icon className="h-5 w-5 text-gold" />
            <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gold">{c.label}</p>
            {c.lines.map((l) => (
              <p key={l} className="mt-2 text-sm text-foreground">{l}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-28">
        <div className="border border-border/60 p-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Write to us</p>
          <h2 className="mt-3 font-display text-3xl">A note to the concierge</h2>
          <form className="mt-8 grid gap-4">
            <input
              placeholder="Full name"
              className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              placeholder="Email"
              className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="button"
              className="bg-gold py-3 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}