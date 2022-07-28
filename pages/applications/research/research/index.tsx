import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ResearchLayout from "@components/layouts/rs_layout";
import { TableData } from "@pages/applications/research/research/data";
import { ResearchTable } from "@components/widgets/table/researchTabel";
function Research() {
  return (
    <>
      <ResearchLayout showexport={true}>
        <ResearchTable TableData={TableData}></ResearchTable>
      </ResearchLayout>
    </>
  );
}

export default Research;
