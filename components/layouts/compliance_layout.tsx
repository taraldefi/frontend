import React from "react";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

const SortbarData = [
  {
    id: 1,
    title: "Company",
    path: "/applications/compliance/company",
  },
  {
    id: 2,
    title: "Screening",
    path: "/applications/compliance/screening",
  },
  {
    id: 3,
    title: "Persons",
    path: "/applications/compliance/persons",
  },
  {
    id: 4,
    title: "Documents",
    path: "/applications/compliance/documents",
  },
];

interface ComplianceLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function ComplianceLayout({
  children,
  showexport,
}: ComplianceLayoutProps) {
  return (
    <DashBoardPageLayout
      showexport={showexport}
      sortBarData={SortbarData}
      exporter={""}
      importer={""}
      date={""}
    >
      {children}
    </DashBoardPageLayout>
  );
}
