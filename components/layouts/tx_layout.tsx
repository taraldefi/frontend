import React from "react";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

const SortbarData = [
  {
    id: 1,
    title: "Supplier",
    path: "/applications/transaction/supplier",
  },
  {
    id: 2,
    title: "Buyer",
    path: "/applications/transaction/buyer",
  },
  {
    id: 3,
    title: "Transactions",
    path: "/applications/transaction/transactions",
  },
  {
    id: 4,
    title: "Financing",
    path: "/applications/transaction/financing",
  },
];

interface StatusLayoutProps {
  children: React.ReactNode;
}
export default function TxLayout({ children }: StatusLayoutProps) {
  return (
    <DashBoardPageLayout
      sortBarData={SortbarData}
      showexport={true}
      exporter={""}
      importer={""}
      date={""}
    >
      {children}
    </DashBoardPageLayout>
  );
}
