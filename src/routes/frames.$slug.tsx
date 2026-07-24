import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { getFrame, frames } from "@/lib/frames";

export const Route = createFileRoute("/frames/$slug")({
  loader: ({ params }) => {
    const frame = getFrame(params.slug);
    if (!frame) throw notFound();
    return { frame };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.frame.name} — Fanlabz` },
          { name: "description", content: loaderData.frame.description },
          { property: "og:title", content: `${loaderData.frame.name} — Fanlabz` },
          { property: "og:description", content: loaderData.frame.description },
        ]
      : [{ title: "Frame — Fanlabz" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: FrameNotFound,
  component: FrameDetail,
});

function FrameNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-3xl flex-1 px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Frame not found</h1>
        <p className="mt-3 text-muted-foreground">That style isn't in the catalog yet.</p>
        <Link to="/catalog" className="mt-6 inline-block text-primary hover:underline">← Back to catalog</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function FrameDetail() {
  const { frame } = Route.useLoaderData();
  const related = frames.filter((f) => f.slug !== frame.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <Link to="/catalog" className="text-sm text-muted-foreground hover:text-foreground">← Catalog</Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src={frame.image}
              alt={`${frame.name} anime poster frame`}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-accent">{frame.tagline}</span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">{frame.name}</h1>
            <p className="mt-4 text-lg text-primary">{frame.price}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{frame.description}</p>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Fits posters from</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {frame.series.map((s: string) => (
                  <span key={s} className="rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/frames/$slug/order"
                params={{ slug: frame.slug }}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Place an order request
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border/80 px-5 py-3 text-sm font-medium transition hover:border-primary/60"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-semibold">You might also like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((f) => (
                <Link
                  key={f.slug}
                  to="/frames/$slug"
                  params={{ slug: f.slug }}
                  className="group flex gap-4 rounded-xl border border-border/60 bg-card p-4 transition hover:border-primary/60"
                >
                  <img src={f.image} alt="" width={120} height={120} loading="lazy" className="h-24 w-24 rounded-lg object-cover" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">{f.name}</h3>
                    <p className="text-sm text-muted-foreground">{f.tagline}</p>
                    <span className="mt-1 text-sm text-primary">{f.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
