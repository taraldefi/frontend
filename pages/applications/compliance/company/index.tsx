import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import { TableData } from "./data";
import { CompanyTable } from "@icodex-az/tariala-component-library";
function Company() {
  return (
    <ComplianceLayout showexport={true}>
      <span className="title" style={{ fontSize: "13.5px" }}>
        BUSINESS DETAILS
      </span>
      <br />
      <CompanyTable companyTableData={TableData} />
    </ComplianceLayout>
  );
}

export default Company;
