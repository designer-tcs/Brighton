import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TabNav } from "@/components/TabNav";

export const Route = createFileRoute("/curriculum")({
  component: CurriculumLayout,
});

const tabs = [
  { label: "Pre-Primary", to: "/curriculum" },
  { label: "Primary", to: "/curriculum/primary" },
  { label: "Middle", to: "/curriculum/middle" },
  { label: "Secondary", to: "/curriculum/secondary" },
  { label: "Senior Secondary", to: "/curriculum/senior-secondary" },
  { label: "SKED", to: "/curriculum/sked" },
  { label: "Across Brighton", to: "/curriculum/across-brighton" },
  { label: "Robotics", to: "/curriculum/robotics" },
  { label: "Sports", to: "/curriculum/sports" },
  { label: "Board Exam Results", to: "/curriculum/board-results" },
];

function CurriculumLayout() {
  return (
    <SiteLayout>
      <TabNav tabs={tabs} mobileGrid />
      <Outlet />
    </SiteLayout>
  );
}
