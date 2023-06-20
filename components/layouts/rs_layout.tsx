import React from "react";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";

const SortbarData = [
  {
    id: 1,
    title: "Research",
    path: "/applications/research/research",
  },
  {
    id: 2,
    title: "Sentiment",
    path: "/applications/research/sentiments",
  },
];

interface researchLayoutProps {
  children: React.ReactNode;
  showexport: boolean;
}
export default function ResearchLayout({
  children,
  showexport,
}: researchLayoutProps) {
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
