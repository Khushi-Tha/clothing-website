import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Bade Saab" },
      { name: "description", content: "Review the pieces in your Bade Saab bag." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <ShoppingBag className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-6 text-[11px] uppercase tracking-[0.5em] text-gold">Your bag</p>
        <h1 className="mt-4 font-display text-5xl">The bag awaits</h1>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          You have not yet selected a piece for the bag. Step into the collection and let
          the karigars' work speak.
        </p>
        <Link
          to="/collection" search={{ q: "" }}
          className="mt-10 inline-block bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:opacity-90"
        >
          Enter the Collection
        </Link>
      </section>
    </SiteLayout>
  );
}