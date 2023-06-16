import React from "react";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

const SortbarData = [
  {
    id: 1,
    title: "Overview",
    path: "/applications/status/overview",
  },
  {
    id: 2,
    title: "Audit Trail",
    path: "/applications/status/audit",
  },
  {
    id: 3,
    title: "Tasks & Team",
    path: "/applications/status/tasks_teams",
  },
  {
    id: 4,
    title: "Customer Comms.",
    path: "/applications/status/customer_comms",
  },
];

interface StatusLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function StatusLayout({
  children,
  showexport,
}: StatusLayoutProps) {
  return (
    <DashBoardPageLayout
      showexport={showexport}
      sortBarData={SortbarData}
      exporter={""}
      importer={""}
      date={""}
    >
      {children}
    </DashBoardPageLayout>
  );
}
