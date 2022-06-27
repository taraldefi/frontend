import React from "react";
import DashBoardLayout from "@components/dashboardlayout";
import Select from "@components/Select/Select";
import { PortalIcons } from "@components/icons";
interface summaryProps {
  selected: boolean;
  item: string;
}
function Summary({ selected, item }: summaryProps) {
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 9.16666L10 11.6667L18.3333 3.33333"
                    stroke={selected ? "#0BD7A4" : "#CBD5E1"}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 10V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333"
                    stroke={selected ? "#0BD7A4" : "#CBD5E1"}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
