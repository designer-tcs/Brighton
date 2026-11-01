import { createFileRoute, redirect } from "@tanstack/react-router";

// Life at Brighton was merged into Infrastructure.
export const Route = createFileRoute("/life")({
  beforeLoad: () => {
    throw redirect({ to: "/infrastructure", statusCode: 301 });
  },
});
