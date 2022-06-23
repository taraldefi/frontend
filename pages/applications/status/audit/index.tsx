import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
export default function Audit() {
  return (
    <DashBoardPageLayout sortbarData={SortbarData}>
      Audit page
    </DashBoardPageLayout>
  );
}
