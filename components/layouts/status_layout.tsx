import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface StatusLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function StatusLayout({
  children,
  showexport,
}: StatusLayoutProps) {
  return (
    <DashBoardPageLayout showexport={showexport} sortBarData={SortbarData}>
      {children}
    </DashBoardPageLayout>
  );
}
