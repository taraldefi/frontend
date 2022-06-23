import React from "react";
import { SortbarData } from "@pages/applications/status/data";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
export default function TaskAndTeam() {
  return (
    <DashBoardPageLayout sortbarData={SortbarData}>
      Task and teams page
    </DashBoardPageLayout>
  );
}
