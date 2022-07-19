import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import SortBarNav from "@components/sortBar";
import { SortBarItem } from "types";

interface DashBoardPageLayoutProps {
  children: React.ReactNode;
  sortBarData: Array<SortBarItem>;
}
export default function DashBoardPageLayout({
  children,
  sortBarData,
}: DashBoardPageLayoutProps) {
  return (
    <DashBoardLayout>
      <div className="rightContent">
        <div className="titleBox">
          <span id="bodyTitle">[Exporter] - [Importer] - [Date] </span>
          <div className="background">
            <SortBarNav data={sortBarData}></SortBarNav>
          </div>
        </div>
        {children}
      </div>
    </DashBoardLayout>
  );
}
