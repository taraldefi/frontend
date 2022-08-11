import DashBoardLayout from "@components/layouts/dashboard_layout";
import FinancialsLayout from "@components/layouts/financials_layout";
import { CashTable } from "@components/widgets/table/cashTable";
import React from "react";
import { TableData } from "./data";

export default function Cash() {
  return (
    <FinancialsLayout showexport={true}>
      <CashTable TableData={TableData} />
    </FinancialsLayout>
  );
}
