import { Link } from "@tanstack/react-router";
import type { Frame } from "@/lib/frames";

export function FrameCard({ frame }: { frame: Frame }) {
  return (
    <Link
      to="/frames/$slug"
      params={{ slug: frame.slug }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition hover:border-primary/60 hover:neon-glow"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={frame.image}
          alt={`${frame.name} anime poster frame`}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold">{frame.name}</h3>
          <span className="text-sm text-primary">{frame.price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{frame.tagline}</p>
        <span className="mt-3 text-xs uppercase tracking-widest text-accent">Order now →</span>
      </div>
    </Link>
  );
}
