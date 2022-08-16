import React from "react";
import { SortbarData } from "@pages/applications/compliance/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface ComplianceLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function ComplianceLayout({
  children,
  showexport,
}: ComplianceLayoutProps) {
  return (
    <DashBoardPageLayout showexport={showexport} sortBarData={SortbarData} exporter={""} importer={""} date={""}>
      {children}
    </DashBoardPageLayout>
  );
}
