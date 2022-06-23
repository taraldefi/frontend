import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
export default function CustomerComms() {
  return (
    <DashBoardPageLayout sortbarData={SortbarData}>
      Customer Comments page
    </DashBoardPageLayout>
  );
}
