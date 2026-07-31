import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Fanlabz
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Home</Link>
          <Link to="/catalog" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Catalog</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fanlabz — handcrafted anime frames from India.</p>
        <p className="text-xs">Code: MIT · Content: CC BY-NC 4.0</p>
      </div>
    </footer>
  );
}
