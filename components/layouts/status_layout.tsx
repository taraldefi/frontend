import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface StatusLayoutProps {
  children: React.ReactNode;
}
export default function StatusLayout({ children }: StatusLayoutProps) {
  return (
    <DashBoardPageLayout sortBarData={SortbarData}>
      {children}
    </DashBoardPageLayout>
  );
}
