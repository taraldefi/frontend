import React from "react";
import { SortbarData } from "@pages/applications/external/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface ReportLayoutProps {
  children: React.ReactNode;
  documentCount: number;
}
export default function ReportLayout({
  children,
  documentCount,
}: ReportLayoutProps) {
  return (
    <DashBoardPageLayout sortBarData={SortbarData} sortBarWidth={"390px"}>
      <div className="main_container">
        <span className="subheading">{documentCount} Documents</span>
        {children}
      </div>
    </DashBoardPageLayout>
  );
}
