import ApplicationLeftMenu from "@components/applicationLeftMenu";
import BottomBar from "@components/newApplicationBottom";
import React from "react";
import LeftMenu from "../leftMenu";
import Layout from "./layout";

interface LayoutProps {
  children: React.ReactNode;
}

const ApplicationLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Layout>
        <ApplicationLeftMenu></ApplicationLeftMenu>
        <div className="mainBodyIn">
          {children}
          <BottomBar></BottomBar>
        </div>
      </Layout>
    </>
  );
};

export default ApplicationLayout;
