import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import SortBarNav from "@components/sortBar";
import { SortBarItem } from "types";

interface DashBoardPageLayoutProps {
  children: React.ReactNode;
  sortbarData: Array<SortBarItem>;
}
export default function DashBoardPageLayout({
  children,
  sortbarData,
}: DashBoardPageLayoutProps) {
  return (
    <DashBoardLayout>
      <div className="rightContent">
        <div className="titleBox">
          <span id="bodyTitle">[Exporter] - [Importer] - [Date] </span>
          <div className="background">
            <SortBarNav width="400px" data={sortbarData}></SortBarNav>
          </div>
        </div>
        {children}
      </div>
    </DashBoardLayout>
  );
}
