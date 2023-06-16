import React from "react";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

const SortbarData = [
  {
    id: 1,
    title: "Profit & Loss",
    path: "/applications/financial/profit",
  },
  {
    id: 2,
    title: "Balance Sheet",
    path: "/applications/financial/balance",
  },
  {
    id: 3,
    title: "Cash Flow",
    path: "/applications/financial/cash",
  },
];

interface FinancialsLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function FinancialsLayout({
  children,
  showexport,
}: FinancialsLayoutProps) {
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
