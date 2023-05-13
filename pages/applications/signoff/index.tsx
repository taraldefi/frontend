import React from "react";
import { SignoffTableData } from "./signOffData";
import SignOffLayout from "@components/layouts/signOffLayout";
import { SignOffTable } from "@taraldefi/tariala-component-library";
function SignOff() {
  return (
    <>
      <SignOffLayout showexport={true}>
        <SignOffTable signOffTableData={SignoffTableData} />
      </SignOffLayout>
    </>
  );
}

export default SignOff;
