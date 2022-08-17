import React from "react";
import { TableData } from "./sign_off_data";
import SignOffLayout from "@components/layouts/signOffLayout";
import { SignOffTable } from "@components/widgets/table/signOffTable";
function SignOff() {
  return (
    <>
      <SignOffLayout showexport={true}>
        <SignOffTable TableData={TableData} />
      </SignOffLayout>
    </>
  );
}

export default SignOff;
