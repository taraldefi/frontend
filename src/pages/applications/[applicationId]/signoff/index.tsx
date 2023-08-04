import React from "react";
import SignOffLayout from "@components/layouts/signOffLayout";
import { SignOffTable } from "@taraldefi/tariala-component-library";

const SignoffTableData = [
  {
    name: "Vincent Lauer",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: true,
    statusSigned: false,
  },
];

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
