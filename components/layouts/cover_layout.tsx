import React from "react";
import { SortbarData } from "@pages/applications/cover/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface ReportLayoutProps {
  children: React.ReactNode;
  documentCount: number;
}
export default function CoverLayout({
  children,
  documentCount,
}: ReportLayoutProps) {
  return (
    <DashBoardPageLayout sortBarData={SortbarData}>
      <div className="main_container">
        <span className="subheading">{documentCount} Documents</span>
        {children}
      </div>
    </DashBoardPageLayout>
  );
}
