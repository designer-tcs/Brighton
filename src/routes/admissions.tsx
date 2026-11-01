import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AdmissionsNav } from "@/components/admissions/AdmissionsNav";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsLayout,
});

function AdmissionsLayout() {
  return (
    <SiteLayout>
      <AdmissionsNav />
      <Outlet />
    </SiteLayout>
  );
}
