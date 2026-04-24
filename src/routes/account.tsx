import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — Bade Saab" },
      { name: "description", content: "Sign in to your Bade Saab account." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">Sign in</p>
          <h1 className="mt-4 font-display text-4xl">Welcome back, Saab</h1>
          <p className="mt-4 text-muted-foreground">
            Access your orders, bespoke measurements, and private invitations.
          </p>
          <form className="mt-10 space-y-4">
            <input
              placeholder="Email"
              className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="button"
              className="w-full bg-gold py-3 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:opacity-90"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="border-t border-border/40 pt-12 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">New to the house</p>
          <h2 className="mt-4 font-display text-4xl">Begin your dossier</h2>
          <p className="mt-4 text-muted-foreground">
            Create an account to save measurements, track orders, and receive invitations to
            private trunk shows.
          </p>
          <Link
            to="/account"
            className="mt-10 inline-block border border-gold px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Create account
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}