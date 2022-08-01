import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import SortBarNav from "@components/sortBar";
import { SortBarItem } from "types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface DashBoardPageLayoutProps {
  children: React.ReactNode;
  sortBarData: Array<SortBarItem>;
  showexport: boolean;
}
export default function DashBoardPageLayout({
  children,
  sortBarData,
  showexport,
}: DashBoardPageLayoutProps) {
  return (
    <DashBoardLayout>
      <div className="rightContent">
        <div className="titleBox">
          {showexport ? (
            <span id="bodyTitle">[Exporter] - [Importer] - [Date] </span>
          ) : (
            <div className="messageBox">
              <FontAwesomeIcon color="#94A3B8" icon={faArrowLeft} />
              <span>Messages</span>
            </div>
          )}
          <div className="background">
            <SortBarNav data={sortBarData}></SortBarNav>
          </div>
        </div>
        {children}
      </div>
    </DashBoardLayout>
  );
}
