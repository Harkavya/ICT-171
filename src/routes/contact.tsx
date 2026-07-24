import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { EMAIL, INSTAGRAM_URL } from "@/lib/frames";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fanlabz" },
      { name: "description", content: "Reach Fanlabz on email or Instagram to talk about custom anime poster frames." },
      { property: "og:title", content: "Contact — Fanlabz" },
      { property: "og:description", content: "Reach Fanlabz on email or Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-bold md:text-5xl">Get in touch</h1>
        <p className="mt-3 text-muted-foreground">Custom requests, bulk orders, or a question about a series — reach out on whichever channel is easiest.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="group rounded-xl border border-border/60 bg-card p-6 transition hover:border-primary/60"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="mt-2 text-lg font-semibold text-primary group-hover:underline">{EMAIL}</p>
            <p className="mt-3 text-sm text-muted-foreground">Opens directly in your mail app.</p>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border/60 bg-card p-6 transition hover:border-primary/60"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
            <p className="mt-2 text-lg font-semibold text-accent group-hover:underline">@fanlabz</p>
            <p className="mt-3 text-sm text-muted-foreground">DMs open — opens in the Instagram app.</p>
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
