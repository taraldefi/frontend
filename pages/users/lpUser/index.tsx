import AppContext from "@components/appContext";
import { PortalIcons } from "@components/icons";
import TopBar from "@components/topBar";
import SecondButton from "@components/widgets/buttonSecondary";
import React, { useContext } from "react";
import { globalState } from "types/global";
import { PoolCard } from "@icodex-az/tariala-component-library";
import logo from "@public/assets/svg/logo.svg";
function Index() {
  const myContext = useContext<globalState>(AppContext);
  return (
    <>
      <TopBar></TopBar>
      <div className="yield-container">
        <div className="yield-contents">
          <div className="yield-title-container">
            <span>YIELD OPPORTUNITIES</span>
            <span>list description and overview.</span>
          </div>

          <PoolCard
            poolTitle={"Cauris Fund #4: Africa Innovation Pool"}
            poolDescription={"Fintech loans in Africa"}
            unitranche={true}
            poolStat={"12.15% USDC"}
            poolSubstat={"19.28% with GFI"}
            poolState={"yield"}
            poolIcon={logo.src}
            onClick={() => {
              myContext.setYieldModal(!myContext.modal);
            }}
          />
          <PoolCard
            poolTitle={"Cauris Fund #3: Africa Innovation Pool"}
            poolDescription={"Africa multi-sector loans"}
            unitranche={false}
            poolStat={"17.00% USDC"}
            poolSubstat={"23.99% with GFI"}
            poolState={"closed"}
            poolIcon={logo.src}
            onClick={() => {
              myContext.setYieldModal(!myContext.modal);
            }}
          />
          <PoolCard
            poolTitle={"Cauris Fund #4: Africa Innovation Pool"}
            poolDescription={"Fintech loans in Africa"}
            unitranche={true}
            poolStat={"12.15% USDC"}
            poolSubstat={"19.28% with GFI"}
            poolState={"yield"}
            poolIcon={logo.src}
            onClick={() => {
              myContext.setYieldModal(!myContext.modal);
            }}
          />
          <PoolCard
            poolTitle={"Cauris Fund #4: Africa Innovation Pool"}
            poolDescription={"Fintech loans in Africa"}
            unitranche={true}
            poolStat={"12.15% USDC"}
            poolSubstat={"19.28% with GFI"}
            poolState={"yield"}
            poolIcon={logo.src}
            onClick={() => {
              myContext.setYieldModal(!myContext.modal);
            }}
          />

          <div className="yield-disclaimer-container">
            <div className="d-item1">
              {" "}
              <PortalIcons selected={false} icon={"general info"}></PortalIcons>
            </div>
            <div className="d-item2">DISCLAIMER</div>
            <div className="d-item3">
              {" "}
              A disclaimer is generally any statement intended to specify or
              delimit the scope of rights and obligations that may be exercised
              and enforced by parties in a legally recognized relationship.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
