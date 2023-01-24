import AppContext from "@components/appContext";
import { PortalIcons } from "@components/icons";
import TopBar from "@components/topBar";
import SecondButton from "@components/widgets/buttonSecondary";
import React, { useContext } from "react";
import { globalState } from "types/global";

function Index() {
  const myContext = useContext<globalState>(AppContext);
  return (
    <>
      <TopBar></TopBar>
      <div className="insurance-container">lorem ipsum</div>
    </>
  );
}

export default Index;
