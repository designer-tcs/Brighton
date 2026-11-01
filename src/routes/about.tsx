import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TabNav } from "@/components/TabNav";

export const Route = createFileRoute("/about")({
  component: AboutLayout,
});

const tabs = [
  { label: "The School", to: "/about" },
  { label: "Management", to: "/about/management" },
  { label: "Board of Advisors", to: "/about/board" },
  { label: "School Uniform", to: "/about/uniform" },
  { label: "Public Disclosure", to: "/about/disclosure" },
  { label: "Work at Brighton", to: "/about/careers" },
];

function AboutLayout() {
  return (
    <SiteLayout>
      <TabNav tabs={tabs} />
      <Outlet />
    </SiteLayout>
  );
}
