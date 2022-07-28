import React from "react";
import Topbar from "../topBar";
import TopBarNav from "../topBarNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="tabs">
      <div className="topbarFix">
      <Topbar />
      <TopBarNav />
      </div>
      <div className="mainBody">{children}</div>
    </div>
  );
};

export default Layout;
