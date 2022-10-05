import LeftMenu from "@components/kycLeftMenu";
import React from "react";

import Layout from "./layout";
import NewLayout from "./testLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const KYCLayout = ({ children }: LayoutProps) => {
  return (
    <NewLayout>
      <div className="bodyContent">{children}</div>
    </NewLayout>
  );
};

export default KYCLayout;
