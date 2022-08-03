import React from "react";
import { SortBarItem } from "types";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface CRSLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
  sortBarData: SortBarItem[];
}
export default function CRSLayout({
  children,
  showexport,
  sortBarData,
}: CRSLayoutProps) {
  return (
    <DashBoardPageLayout showexport={showexport} sortBarData={sortBarData}>
      {children}
    </DashBoardPageLayout>
  );
}
