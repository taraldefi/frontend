import { PortalIcons } from "@components/icons";
import TopBar from "@components/topBar";
import SecondButton from "@components/widgets/buttonSecondary";
import React from "react";

function index() {
  return (
    <>
      <TopBar></TopBar>
      <div className="insurance-container">
        <div className="insurance-contents">
          <div className="insurance-title-container">
            <span>PAGE TITLE</span>
            <span>page description and overview.</span>
          </div>
          <div className="insurance-balance-container">
            <div className="available-balance">
              <div className="balance">AVAILABLE BALANCE</div>
            </div>
            <div className="tal-balance">
              <span>1,483.406843</span>
              <span>TAL</span>
            </div>
            <div className="st-tal-balance">
              <span>0.00</span>
              <span>stTAL</span>
            </div>
          </div>
          <div className="insurance-tal-container">
            <div className="icon-container">
              <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
            </div>
            <div className="lock-tal-container">
              <div className="lock-tal-stTal">
                <span>stTal</span>
                <span>0.00</span>
                <span>1 stTAL ≈ 1.976385 TAL</span>
              </div>
              <div className="lock-tal-Tal">
                <span>TAL</span>
                <span>0.00</span>
                <span>Cooldown status: Not started</span>
              </div>
              <div className="lock-tal-APR">
                <span>Current APR</span>
                <span>9.45%</span>
              </div>
              <div className="lock-tal-button">
                <SecondButton
                  title={"Lock TAL"}
                  onClick={function (
                    event: React.MouseEvent<HTMLElement, MouseEvent>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                ></SecondButton>
              </div>
            </div>
          </div>
          <div className="insurance-unstacked-container">
            <span>Unstacked LP Tokens</span>
            <span>
              We noticed that your wallet contains LP Tokens that are not
              stacked yet. If you want to stake them, pick the appropriate token
              in the table, hit Lock TAL and choose Stake LP to initiate
              staking.
            </span>
          </div>
        </div>
        <div className="insurance-info"></div>
      </div>
    </>
  );
}

export default index;
