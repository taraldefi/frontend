import Layout from "@components/layouts/layout";
import NewLayoutNM from "@components/layouts/testLayoutNoMenue";

import React from "react";
import { ApplicationTable } from "@taraldefi/tariala-component-library";

import { TableData } from "./data";
export default function Index() {
  return (
    <NewLayoutNM>
      <div className="application--wrapper">
        <ApplicationTable applicationTableData={TableData} />
      </div>
      {/* <ApplicaitonTable TableData={TableData}></ApplicaitonTable> */}
    </NewLayoutNM>
  );
}
