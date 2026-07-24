import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { getFrame, EMAIL, GOOGLE_FORM_URL } from "@/lib/frames";

export const Route = createFileRoute("/frames/$slug/order")({
  loader: ({ params }) => {
    const frame = getFrame(params.slug);
    if (!frame) throw notFound();
    return { frame };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Order ${loaderData.frame.name} — Fanlabz` },
          { name: "description", content: `Submit an order request for the ${loaderData.frame.name} anime poster frame.` },
          { property: "og:title", content: `Order ${loaderData.frame.name} — Fanlabz` },
          { property: "og:description", content: `Submit an order request for the ${loaderData.frame.name} frame.` },
        ]
      : [{ title: "Order — Fanlabz" }, { name: "robots", content: "noindex" }],
  }),
  component: OrderPage,
});

function OrderPage() {
  const { frame } = Route.useLoaderData();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [poster, setPoster] = useState(frame.series[0] ?? "");
  const [notes, setNotes] = useState("");
  const [method, setMethod] = useState<"email" | "form">("email");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "form") {
      window.open(GOOGLE_FORM_URL, "_blank", "noopener");
      return;
    }
    const subject = encodeURIComponent(`Fanlabz order request — ${frame.name}`);
    const body = encodeURIComponent(
      `Hi Fanlabz,\n\nI'd like to order the ${frame.name} (${frame.price}).\n\nPoster: ${poster}\nName: ${name}\nContact: ${contact}\nNotes: ${notes}\n\nThanks!`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <Link to="/frames/$slug" params={{ slug: frame.slug }} className="text-sm text-muted-foreground hover:text-foreground">← Back to {frame.name}</Link>

        <div className="mt-6 flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4">
          <img src={frame.image} alt="" width={80} height={80} className="h-20 w-20 rounded-lg object-cover" />
          <div>
            <h1 className="text-xl font-semibold">Order: {frame.name}</h1>
            <p className="text-sm text-muted-foreground">{frame.price} · built to order</p>
          </div>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-5 rounded-xl border border-border/60 bg-card p-6">
          <Field label="Your name">
            <input required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} className="input" />
          </Field>
          <Field label="Email or phone">
            <input required maxLength={120} value={contact} onChange={(e) => setContact(e.target.value)} className="input" />
          </Field>
          <Field label="Which poster / series?">
            <select value={poster} onChange={(e) => setPoster(e.target.value)} className="input">
              {frame.series.map((s: string) => <option key={s} value={s}>{s}</option>)}
              <option value="Other">Other (mention in notes)</option>
            </select>
          </Field>
          <Field label="Notes (size, custom poster, etc.)">
            <textarea maxLength={600} rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} className="input resize-none" />
          </Field>

          <div>
            <p className="text-sm font-medium">Send this order via:</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <MethodOption checked={method === "email"} onChange={() => setMethod("email")} title="Email" desc="Opens your mail app with a pre-filled draft." />
              <MethodOption checked={method === "form"} onChange={() => setMethod("form")} title="Google Form" desc="Fill out our short order form." />
            </div>
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            {method === "email" ? "Open email draft" : "Open Google Form"}
          </button>
          <p className="text-xs text-muted-foreground">
            No payment is taken here — we'll confirm details before invoicing.
          </p>
        </form>
      </main>
      <SiteFooter />

      <style>{`
        .input { width: 100%; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--background); padding: 0.6rem 0.75rem; font-size: 0.9rem; color: var(--foreground); outline: none; }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in oklch, var(--primary) 25%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

function MethodOption({ checked, onChange, title, desc }: { checked: boolean; onChange: () => void; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`rounded-lg border p-3 text-left transition ${checked ? "border-primary bg-primary/10" : "border-border/60 hover:border-primary/40"}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
    </button>
  );
}
