import AppContext from "@components/appContext";
import LeftMenu from "@components/kycLeftMenu";
import React, { useContext } from "react";
import { globalState } from "types/global";
import Topbar from "../topBar";
import TopBarNav from "../topBarNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

const NewLayoutNM = ({ children }: LayoutProps) => {
  return (
    <div className="bodyContainer">
      <div className="topbarFix1">
        <Topbar />
        <TopBarNav />
      </div>
      <div className="mainBody1">
        <div className="mainBodyIn">{children}</div>
      </div>
    </div>
  );
};

export default NewLayoutNM;
