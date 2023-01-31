import React from "react";
import { SortbarData } from "@pages/applications/transaction/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

interface StatusLayoutProps {
  children: React.ReactNode;
}
export default function TxLayout({ children }: StatusLayoutProps) {
  return (
    <DashBoardPageLayout
      sortBarData={SortbarData}
      showexport={true}
      exporter={""}
      importer={""}
      date={""}
    >
      {children}
    </DashBoardPageLayout>
  );
}
