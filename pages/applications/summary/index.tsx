import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import { PortalIcons } from "@components/icons";
import Select from "@components/Select/Select";
function Summary() {
  return (
    <>
      <DashBoardLayout>
        <div className="summaryBody">
          <div className="titleBox">
            <span>[Exporter] - [Importer] - [Date] </span>
          </div>

          <div className="inputBox">
            <div className="business">
              <span>BUSINESS SIDES</span>
              <span>Exporter</span>
              <input
                className="inputs"
                type="text"
                placeholder="Exporter name..."
              ></input>
              <span>Importer</span>
              <input
                className="inputs"
                type="text"
                placeholder="importer name..."
              ></input>
            </div>
            <div className="transaction">
              <span>TRANSACTION DETAILS</span>
              <span>Transaction</span>
              <div className="portalIcon">
                <PortalIcons selected={false} icon={"dollar"} />
              </div>
              <input
                type="text"
                className="inputs"
                placeholder="Transaction amount..."
              ></input>
              <span>Interest</span>
              <div className="portalIcon">
                <PortalIcons selected={false} icon={"interest"} />
              </div>
              <input
                type="text"
                className="inputs"
                placeholder="Percentage..."
              ></input>
              <span>Downpayment</span>
              <div className="portalIcon">
                <PortalIcons selected={false} icon={"dollar"} />
              </div>
              <input
                type="text"
                className="inputs"
                placeholder="Deposit amount..."
              ></input>
              <span>Term</span>
              <input
                type="date"
                className="inputs"
                placeholder="select date..."
              ></input>
              <span>Repayment Profile</span>
              <Select category={"repayment"} />
            </div>
            <div className="info">
              <span>INFO</span>
              <span>Industry</span>
              <Select category={"repayment"} />
              <span>Goods</span>
              <select>
                <option value="" disabled selected hidden>
                  Goods type...
                </option>
                <option>option</option>
                <option>option</option>
              </select>
              <span>Delivery date</span>
              <input
                type="date"
                className="inputs"
                placeholder="Select date..."
              ></input>
              <span>Country</span>
              <select>
                <option value="" disabled selected hidden>
                  Select Country...
                </option>
                <option>option</option>
                <option>option</option>
              </select>
            </div>

            <div className="contract">
              <span>CONTRACT STATUS</span>
              <div className="header">
                <PortalIcons icon="checkBox" selected={false} />
                <span>contact Signed</span>
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default Summary;
