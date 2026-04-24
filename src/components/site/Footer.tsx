import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-onyx">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A house of heritage menswear. Each garment is crafted by master karigars across
              Lucknow, Varanasi, and Agra — a tribute to the gentleman of consequence.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              House
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/heritage" className="hover:text-foreground">Heritage</Link></li>
              <li><Link to="/atelier" className="hover:text-foreground">Atelier</Link></li>
              <li><Link to="/collection" search={{ q: "" }} className="hover:text-foreground">Collection</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              Care
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Bespoke</a></li>
              <li><a href="#" className="hover:text-foreground">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground">Returns</a></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              The Saab Letter
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Private invitations, new collections, and atelier stories.
            </p>
            <form className="flex border border-border">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="bg-gold px-5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Bade Saab. Crafted in India.</p>
          <p className="tracking-[0.2em] uppercase">Aadab · आदाब · آداب</p>
        </div>
      </div>
    </footer>
  );
}