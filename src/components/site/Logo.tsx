import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex flex-col items-start leading-none ${className}`}>
      <span className="font-display text-2xl font-medium tracking-[0.18em] text-foreground">
        BADE <span className="text-gold">SAAB</span>
      </span>
      <span className="mt-0.5 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
        Heritage Menswear
      </span>
    </Link>
  );
}