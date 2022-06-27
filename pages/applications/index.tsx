import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";

interface LayoutProps {
  children: React.ReactNode;
}

const Application = ({ children }: LayoutProps) => {
  return <DashBoardLayout>{children}</DashBoardLayout>;
};

export default Application;
