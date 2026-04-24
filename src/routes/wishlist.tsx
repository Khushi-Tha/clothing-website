import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Bade Saab" },
      { name: "description", content: "Pieces you have set aside at the Bade Saab atelier." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Heart className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-6 text-[11px] uppercase tracking-[0.5em] text-gold">Set aside</p>
        <h1 className="mt-4 font-display text-5xl">Your private wishlist</h1>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          Mark a piece with the heart to keep it close. Your wishlist is the private corner
          of the atelier.
        </p>
        <Link
          to="/collection" search={{ q: "" }}
          className="mt-10 inline-block border border-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground"
        >
          Browse the Collection
        </Link>
      </section>
    </SiteLayout>
  );
}