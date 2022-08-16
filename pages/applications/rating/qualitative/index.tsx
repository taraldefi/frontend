import { PortalIcons } from "@components/icons";
import CRSLayout from "@components/layouts/crs_layout";
import TxLayout from "@components/layouts/tx_layout";
import React from "react";
import { SortbarData } from "../data";
export default function QunatitativePage() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <CRSLayout showexport={true} sortBarData={SortbarData}>
      <div className="qualitative">
        <div className="firstCol">
          <span>FINANCIAL STATEMENT NOTES</span>
          <span>Company Name</span>
          <input
            type="text"
            className="inputs"
            placeholder="Company Name..."
          ></input>
          <span>Date Established</span>
          <input
            type="date"
            className="inputs"
            placeholder="Date Established..."
          ></input>
          <span>No.of Employees</span>
          <input
            type="text"
            className="inputs"
            placeholder="Number of employees..."
          ></input>
        </div>
        <div className="secondCol">
          <span>Postcode</span>
          <input
            type="text"
            className="inputs"
            placeholder="Percentage..."
          ></input>
          <span>Postcode</span>
          <input
            type="text"
            className="inputs"
            placeholder="Percentage..."
          ></input>
          <span>Postcode</span>
          <input
            type="text"
            className="inputs"
            placeholder="Percentage..."
          ></input>
        </div>
        <div className="thirdCol">
          <span>Turnover(EURm)</span>
          <input
            className="inputs"
            type="text"
            placeholder="Turnover amount..."
          ></input>
          <span>Balance Sheet Total(EURm)</span>
          <input
            className="inputs"
            type="text"
            placeholder="Total amount..."
          ></input>
          <span>Balance Sheet Total(EURm)</span>
          <input
            className="inputs"
            type="text"
            placeholder="Total amount..."
          ></input>
        </div>
        <div className="rating">
          <div className="header">
            <span>MANAGEMENT ASSESSMENT</span>
          </div>
          <div className="inputs">
            <input
              type="text"
              className="input"
              placeholder="Rating..."
            ></input>
            <span>Rating Agency</span>
            <input
              type="text"
              className="input"
              placeholder="Agency name..."
            ></input>
            <span>Date of the rating</span>
            <input
              type="date"
              className="input"
              placeholder="Rating..."
            ></input>
          </div>
        </div>
      </div>
    </CRSLayout>
  );
}
