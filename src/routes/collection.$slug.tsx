import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { formatPrice, getProductBySlug, products } from "@/data/products";
import { Heart, ShoppingBag, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Piece not found — Bade Saab" }] };
    return {
      meta: [
        { title: `${p.name} — Bade Saab` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — Bade Saab` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Link to="/collection" search={{ q: "" }} className="mt-6 inline-block text-gold underline-offset-8 hover:underline">
          Return to collection
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function NotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Piece not found</h1>
        <p className="mt-4 text-muted-foreground">This silhouette is no longer in our atelier.</p>
        <Link to="/collection" search={{ q: "" }} className="mt-8 inline-block text-gold underline-offset-8 hover:underline">
          Browse the collection →
        </Link>
      </div>
    </SiteLayout>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState(product.sizes[0]);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 pt-8 text-xs text-muted-foreground">
        <nav className="flex items-center gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/collection" search={{ q: "" }} className="hover:text-foreground">Collection</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-2 md:py-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary shadow-elegant">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
          {product.badge && (
            <span className="absolute left-5 top-5 border border-gold bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>

          <p className="mt-8 text-2xl font-light tracking-wide text-foreground">
            {formatPrice(product)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all duties · Complimentary shipping</p>

          <div className="mt-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[3rem] border px-4 py-2.5 text-sm transition-colors ${
                    size === s
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-foreground hover:border-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90">
              <ShoppingBag className="h-4 w-4" />
              Add to bag
            </button>
            <button
              aria-label="Wishlist"
              className="flex items-center justify-center border border-border px-5 transition-colors hover:border-gold hover:text-gold"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 space-y-6 border-t border-border/40 pt-10">
            <p className="leading-relaxed text-muted-foreground">{product.description}</p>

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Fabric</p>
              <p className="mt-2 text-sm text-foreground">{product.fabric}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Craftsmanship</p>
              <p className="mt-2 text-sm text-foreground">{product.craftsmanship}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Details</p>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-gold">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">From the same house</h2>
            <Link
              to="/collection" search={{ q: "" }}
              className="hidden text-[11px] uppercase tracking-[0.3em] text-gold hover:underline md:inline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}