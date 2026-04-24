import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, type Category } from "@/data/products";
import { Search } from "lucide-react";

export const Route = createFileRoute("/collection/")({
  validateSearch: (search: Record<string, unknown>): { q: string } => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => ({
    meta: [
      { title: "The Collection — Bade Saab" },
      {
        name: "description",
        content:
          "Explore the full Bade Saab collection — sherwani, kurta, three-piece suits, bandhgala, footwear and accessories crafted by master artisans.",
      },
      { property: "og:title", content: "The Collection — Bade Saab" },
      {
        property: "og:description",
        content: "Sherwani, suits, bandhgala and accessories — handcrafted heritage menswear.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { q: urlQuery } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [active, setActive] = useState<Category | "All">("All");
  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const cat = active === "All" || p.category === active;
      const q = query.trim().toLowerCase();
      const text = q === "" || `${p.name} ${p.tagline} ${p.fabric}`.toLowerCase().includes(q);
      return cat && text;
    });
  }, [active, query]);

  return (
    <SiteLayout>
      <section className="border-b border-border/40 bg-radial-gold">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">The Collection</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">An anthology of attire</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Six categories. One philosophy — that a man is remembered as much by his cloth as by his
            conduct.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 border-b border-border/40 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-[11px] uppercase tracking-[0.25em] transition-colors ${
                  active === c
                    ? "text-gold underline decoration-gold underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
                navigate({ search: { q: v }, replace: true });
              }}
              placeholder="Search the house…"
              className="w-full border border-border bg-transparent py-2.5 pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-gold"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-24 text-center text-sm text-muted-foreground">
            No pieces match your search. Try another silhouette.
          </p>
        )}
      </section>
    </SiteLayout>
  );
}