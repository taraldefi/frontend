import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import { ScreeningTable } from "@components/widgets/table/screeningTable";
import { TableData } from "./data";
function Company() {
  return (
    <ComplianceLayout showexport={true}>
      <ScreeningTable TableData={TableData}></ScreeningTable>
    </ComplianceLayout>
  );
}

export default Company;
