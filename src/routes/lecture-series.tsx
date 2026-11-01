import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lecture-series")({
  component: () => <Outlet />,
});
