import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import { CompanyTable } from "@components/widgets/table/companyTable";
import { TableData } from "./data";

function Company() {
  return (
    <ComplianceLayout showexport={true}>
      <CompanyTable TableData={TableData} />
    </ComplianceLayout>
  );
}

export default Company;
