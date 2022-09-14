import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function Index() {
  return (
    <ApplicationLayout>
      <div className="plContainer">
        <div className="assetsContainer">
          <div className="maintitle">Assets</div>
          <div className="assetsItems">
            <span>Current Assets</span>
            <span>Fixed Assets</span>
            <span>Current Liabilities</span>
            <span>Long Term Liabilities</span>
            <span>Total Liabilities</span>
          </div>
        </div>
        <div className="vLine"></div>
        <div className="currentYear">
          <div className="maintitle">2022 (Current Year)</div>
          <div className="currentYearItems">
            <input
              type="text"
              className="inputs"
              placeholder="Enter amount..."
            />
            <input
              type="text"
              className="inputs"
              placeholder="Enter amount..."
            />
            <input
              type="text"
              className="inputs"
              placeholder="Enter amount..."
            />
            <input
              type="text"
              className="inputs"
              placeholder="Enter amount..."
            />
            <input
              type="text"
              className="inputs"
              placeholder="Enter amount..."
            />

          </div>
        </div>
        <div className="vLine"></div>
        <div className="prevYear1">
          <div className="currentYear">
            <div className="maintitle">2021</div>
            <div className="currentYearItems">
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
            </div>
          </div>
        </div>
        <div className="vLine"></div>
        <div className="prevYear2">
          <div className="currentYear">
            <div className="maintitle">2020</div>
            <div className="currentYearItems">
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
              <input
                type="text"
                className="inputs"
                placeholder="Enter amount..."
              />
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default Index;
