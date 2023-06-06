import React from "react";
import CRSLayout from "@components/layouts/crs_layout";
import SortbarData from "../data";
import { QuantitativeTable } from "@components/widgets/table/quantitativeTable";
import TableData from "./data";

function Qualitative() {
  return (
    <CRSLayout showexport={true} sortBarData={SortbarData}>
      <QuantitativeTable TableData={TableData}></QuantitativeTable>
    </CRSLayout>
  );
}

export default Qualitative;
