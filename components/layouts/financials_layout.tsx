import React from "react";

import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
import { SortbarData } from "@pages/applications/financial/data";

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
