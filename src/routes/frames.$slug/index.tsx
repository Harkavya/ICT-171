import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/frames/$slug/")({
  component: () => null,
});
