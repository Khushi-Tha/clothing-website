import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/collection/$slug"
      params={{ slug: product.slug }}
      className="group relative block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 border border-gold bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-2 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-gold">
            View piece →
          </span>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-xl text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        <p className="mt-3 text-sm tracking-wider text-gold">{formatPrice(product)}</p>
      </div>
    </Link>
  );
}