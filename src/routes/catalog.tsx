import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { FrameCard } from "@/components/FrameCard";
import { frames } from "@/lib/frames";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Fanlabz" },
      { name: "description", content: "Browse all handcrafted anime poster frames from Fanlabz." },
      { property: "og:title", content: "Catalog — Fanlabz" },
      { property: "og:description", content: "Browse all handcrafted anime poster frames from Fanlabz." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-bold md:text-5xl">The catalog</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Every frame is built to order. Pick a style and we'll set up the poster you want.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frames.map((f) => (
            <FrameCard key={f.slug} frame={f} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
