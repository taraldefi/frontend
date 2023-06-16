import CRSLayout from "@components/layouts/crs_layout";
import React from "react";

const SortbarData = [
  {
    id: 1,
    title: "Quantitative",
    path: "/applications/rating/quantitative",
  },
  {
    id: 2,
    title: "Qualitative",
    path: "/applications/rating/qualitative",
  },
];

export default function QunatitativePage() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <CRSLayout showexport={true} sortBarData={SortbarData}>
      <div className="qualitative">
        <div className="firstCol">
          <span>FINANCIAL STATEMENT NOTES</span>
          <span>One-Off charges</span>
          <input
            type="text"
            className="inputs"
            placeholder="Charge Amount..."
          ></input>
          <span>Adj. to Financial Instruments Valuation</span>
          <input
            type="text"
            className="inputs"
            id="percentage"
            placeholder="Percentage..."
          ></input>
          <span>Preferred Stock / Convertible Debt</span>
          <input
            type="text"
            className="inputs"
            placeholder="Stock Types..."
          ></input>
        </div>
        <div className="secondCol">
          <span>Information Quality</span>
          <select className="inputs" placeholder="select..."></select>
          <span>Capital Leases</span>
          <input
            type="text"
            className="inputs"
            placeholder="Number of capital leases..."
          ></input>
          <span>Options/Warrents</span>
          <select className="inputs" placeholder="Percentage..."></select>
        </div>
        <div className="thirdCol">
          <span>Minority interests investment</span>
          <input
            className="inputs"
            type="text"
            id="percentage"
            placeholder="Percentage..."
          ></input>
          <span>Operating Leases</span>
          <input
            className="inputs"
            type="text"
            placeholder="Total amount..."
          ></input>
          <span>Tax</span>
          <input
            className="inputs"
            type="text"
            id="percentage"
            placeholder="percentage..."
          ></input>
        </div>
        <div className="rating">
          <div className="header">
            <span>MANAGEMENT ASSESSMENT</span>
          </div>

          <div className="inputs">
            <span>Previous Employment</span>
            <input
              type="text"
              className="input"
              id="star"
              placeholder="Rating..."
            ></input>
            <span>University Degrees</span>
            <input
              type="text"
              className="input"
              placeholder="Degree..."
            ></input>
            <span>Advanced Degrees</span>
            <input
              type="text"
              className="input"
              placeholder="Degree..."
            ></input>
          </div>
        </div>
      </div>
    </CRSLayout>
  );
}
