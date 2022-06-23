import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
export default function Overview() {
  return (
    <DashBoardPageLayout sortbarData={SortbarData}>
      overview page
    </DashBoardPageLayout>
  );
}
