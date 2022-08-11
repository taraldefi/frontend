import DashBoardLayout from "@components/layouts/dashboard_layout";
import FinancialsLayout from "@components/layouts/financials_layout";
import { ProfitTable } from "@components/widgets/table/profitTable";
import React from "react";
import { TableData } from "./data";

export default function Profit() {
  return (
    <FinancialsLayout showexport={true}>
      <ProfitTable TableData={TableData} />
    </FinancialsLayout>
  );
}
