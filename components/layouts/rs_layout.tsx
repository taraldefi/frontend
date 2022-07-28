import React from "react";
import { SortbarData } from "@pages/applications/research/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface researchLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function ResearchLayout({
  children,
  showexport,
}: researchLayoutProps) {
  return (
    <DashBoardPageLayout
      showexport={showexport}
      sortBarData={SortbarData}
      sortBarWidth={"190px"}
    >
      {children}
    </DashBoardPageLayout>
  );
}
