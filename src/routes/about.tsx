import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fanlabz" },
      { name: "description", content: "Fanlabz is a small anime poster frame studio from India, deployed on Azure and documented openly on GitHub." },
      { property: "og:title", content: "About — Fanlabz" },
      { property: "og:description", content: "A small anime poster frame studio from India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-bold md:text-5xl">About Fanlabz</h1>
        <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Fanlabz started as a small startup in India making handcrafted poster frames for anime fans. This site is the
            evolving digital storefront — a growing catalog of frame styles fitted to the series people actually love.
          </p>
          <p>
            The site is intentionally simple: static content served by Nginx on an Ubuntu 22.04 Azure VM, publicly
            accessible at <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-foreground">20.193.240.175</code>.
            It's a small demonstration of Infrastructure-as-a-Service — deploying, configuring, and maintaining a cloud-hosted
            web service end to end.
          </p>
          <p>
            Ordering doesn't need a heavy backend. Each frame page has an order form that hands off cleanly to email or a
            Google Form, so we can run the workflow with the tools we already use every day.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-semibold">Licensing</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Code:</strong> MIT License — free to reuse, learn from, and modify.</li>
            <li><strong className="text-foreground">Written content:</strong> CC BY-NC 4.0 — share with attribution, non-commercial use only.</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
