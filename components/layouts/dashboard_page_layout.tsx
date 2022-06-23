import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import SortBarNav from "@components/sortBar";
import { SortBarItem } from "types";

interface DashBoardPageLayoutProps {
  children: React.ReactNode;
  sortBarData: Array<SortBarItem>;
  sortBarWidth: string;
}
export default function DashBoardPageLayout({
  children,
  sortBarData,
  sortBarWidth,
}: DashBoardPageLayoutProps) {
  return (
    <DashBoardLayout>
      <div className="rightContent">
        <div className="titleBox">
          <span id="bodyTitle">[Exporter] - [Importer] - [Date] </span>
          <div className="background">
            <SortBarNav width={sortBarWidth} data={sortBarData}></SortBarNav>
          </div>
        </div>
        {children}
      </div>
    </DashBoardLayout>
  );
}
