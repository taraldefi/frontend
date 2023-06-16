import React from "react";
import SignOffLayout from "@components/layouts/signOffLayout";
import { SignOffTable } from "@taraldefi/tariala-component-library";

const SignoffTableData = [
  {
    name: "Cameron Williamson",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: false,
    statusSigned: true,
  },
  {
    name: "Cameron Williamson",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: false,
    statusSigned: false,
  },
  {
    name: "Cameron Williamson",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: true,
    statusSigned: true,
  },
  {
    name: "Cameron Williamson",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: false,
    statusSigned: false,
  },
  {
    name: "Cameron Williamson",
    image: "/assets/images/1.png",
    email: "Email@company.com",
    position: "Head of Credit",
    statusSeen: false,
    statusSigned: true,
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
