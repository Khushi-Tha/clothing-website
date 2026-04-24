import { Link, useNavigate } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/" as const, label: "Home" },
  { to: "/collection" as const, label: "Collection" },
  { to: "/heritage" as const, label: "Heritage" },
  { to: "/atelier" as const, label: "Atelier" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    setSearchOpen(false);
    navigate({ to: "/collection", search: { q } });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              search={item.to === "/collection" ? { q: "" } : undefined}
              className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 text-foreground">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-full p-2 transition-colors hover:bg-secondary hover:text-gold"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
          <Link
            to="/account"
            aria-label="Account"
            className="rounded-full p-2 transition-colors hover:bg-secondary hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            <User className="h-4 w-4" />
          </Link>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="rounded-full p-2 transition-colors hover:bg-secondary hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            <Heart className="h-4 w-4" />
          </Link>
          <Link
            to="/cart"
            aria-label="Bag"
            className="relative rounded-full p-2 transition-colors hover:bg-secondary hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Search drawer */}
      <div
        className={`overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          searchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-5"
        >
          <Search className="h-4 w-4 text-gold" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sherwani, kurta, suit…"
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
          />
          <button
            type="submit"
            className="bg-gold px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>

      <nav className="flex items-center justify-center gap-5 overflow-x-auto border-t border-border/40 px-6 py-2 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            search={item.to === "/collection" ? { q: "" } : undefined}
            className="whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-gold"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}