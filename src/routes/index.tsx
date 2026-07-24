import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { FrameCard } from "@/components/FrameCard";
import { frames } from "@/lib/frames";
import hero from "@/assets/hero-anime.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fanlabz — Handcrafted Anime Poster Frames" },
      { name: "description", content: "Handcrafted anime poster frames from India. Browse the catalog and order your favorite series." },
      { property: "og:title", content: "Fanlabz — Handcrafted Anime Poster Frames" },
      { property: "og:description", content: "Handcrafted anime poster frames from India." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 opacity-40">
            <img src={hero} alt="" width={1600} height={1200} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Handcrafted in India
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
              Anime you love, <span className="gradient-text">framed properly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Fanlabz makes premium poster frames for your favorite series — from shonen classics
              to slice-of-life and cyberpunk keyvisuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Browse the catalog
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-primary/60"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Featured frames</h2>
              <p className="mt-2 text-muted-foreground">A small preview — full catalog is growing weekly.</p>
            </div>
            <Link to="/catalog" className="hidden text-sm text-accent hover:underline md:block">See all →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frames.map((f) => (
              <FrameCard key={f.slug} frame={f} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
