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
      <div className="yield-container">
        <div className="yield-contents">
          <div className="yield-title-container">
            <span>YIELD OPPORTUNITIES</span>
            <span>list description and overview.</span>
          </div>

          <div className="yield-tal-container">
            <div className="lock-title">
              <div className="item1">
                {" "}
                <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
              </div>
              <div className="item2">
                Cauris Fund #4: Africa Innovation Pool
              </div>
              <div className="item3">Fintech loans in Africa</div>
            </div>
            <div className="lock-tal-Tal">
              <span>12.15% USDC</span>
              <span>
                19.28% with GFI{" "}
                <PortalIcons
                  selected={false}
                  icon={"general info"}
                ></PortalIcons>
              </span>
            </div>

            <div className="lock-tal-button">
              <SecondButton
                title={"Unitranche"}
                onClick={() => {}}
              ></SecondButton>
              <SecondButton
                title={"yield"}
                onClick={() => {
                  console.log("debug 1:", open);
                  myContext.setYieldModal(!myContext.modal);
                }}
              ></SecondButton>
            </div>
          </div>
          <div className="yield-tal-container">
            <div className="lock-title">
              <div className="item1">
                {" "}
                <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
              </div>
              <div className="item2">
                Cauris Fund #4: Africa Innovation Pool
              </div>
              <div className="item3">Fintech loans in Africa</div>
            </div>
            <div className="lock-tal-Tal">
              <span>12.15% USDC</span>
              <span>
                19.28% with GFI{" "}
                <PortalIcons
                  selected={false}
                  icon={"general info"}
                ></PortalIcons>
              </span>
            </div>

            <div className="lock-tal-button">
              <SecondButton
                title={"Unitranche"}
                onClick={() => {}}
              ></SecondButton>
              <SecondButton
                title={"yield"}
                onClick={() => {
                  console.log("debug 1:", open);
                  myContext.setYieldModal(!myContext.modal);
                }}
              ></SecondButton>
            </div>
          </div>
          <div className="yield-tal-container">
            <div className="lock-title">
              <div className="item1">
                {" "}
                <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
              </div>
              <div className="item2">
                Cauris Fund #4: Africa Innovation Pool
              </div>
              <div className="item3">Fintech loans in Africa</div>
            </div>
            <div className="lock-tal-Tal">
              <span>12.15% USDC</span>
              <span>
                19.28% with GFI
                <PortalIcons
                  selected={false}
                  icon={"general info"}
                ></PortalIcons>
              </span>
            </div>

            <div className="lock-tal-button">
              <SecondButton
                title={"Unitranche"}
                onClick={() => {}}
              ></SecondButton>
              <SecondButton
                title={"full"}
                onClick={() => {
                  console.log("debug 1:", open);
                  myContext.setYieldModal(!myContext.modal);
                }}
              ></SecondButton>
            </div>
          </div>
          <div className="yield-tal-container">
            <div className="lock-title">
              <div className="item1">
                {" "}
                <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
              </div>
              <div className="item2">
                Cauris Fund #4: Africa Innovation Pool
              </div>
              <div className="item3">Fintech loans in Africa</div>
            </div>
            <div className="lock-tal-Tal">
              <span>12.15% USDC</span>
              <span>
                19.28% with GFI{" "}
                <PortalIcons
                  selected={false}
                  icon={"general info"}
                ></PortalIcons>
              </span>
            </div>

            <div className="lock-tal-button">
              <SecondButton
                title={"Unitranche"}
                onClick={() => {}}
              ></SecondButton>
              <SecondButton
                title={"closed"}
                onClick={() => {
                  console.log("debug 1:", open);
                  myContext.setYieldModal(!myContext.modal);
                }}
              ></SecondButton>
            </div>
          </div>
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
