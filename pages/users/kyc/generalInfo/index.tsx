import KYCLayout from "@components/layouts/kycLayout";
import Layout from "@components/layouts/layout";
import React from "react";

function index() {
  return (
    <KYCLayout>
      <div className="kycContainer">
        <div className="genInfo">
          <div className="infoWrapper">
            <div className="mainTitle">INFO</div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Nationality</span>
                <select className="inputs" name="" id="">
                  <option value="">German</option>
                </select>
              </div>
              <div className="inputContainer">
                <span>Headquarters Location</span>
                <select className="inputs" name="" id="">
                  <option value="">German</option>
                </select>
              </div>
            </div>
            <div className="inputContainer">
              <span>Industry Type</span>
              <select name="" className="inputs" id="">
                <option value="">Information Technology</option>
              </select>
            </div>
            <div className="inputContainer">
              <span>Core Business</span>
              <select name="" className="inputs" id="">
                <option value="">Software Development</option>
              </select>
            </div>
            <div className="inputContainer">
              <span>Nature of Business</span>
              <textarea
                name=""
                rows={4}
                cols={40}
                className="inputs"
                id=""
                placeholder="Software development refers to the design, documentation, programming, testing, and ongoing maintenance of a software deliverable."
              ></textarea>
            </div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Incorporation Date</span>
                <input type="date" className="inputs" id="calendar" />
              </div>
              <div className="inputContainer">
                <span>Legal Form</span>
                <select name="" className="inputs" id="">
                  <option value="">Limited</option>
                </select>
              </div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="branchWrapper">
            <div className="mainTitle">BRANCHES</div>
          </div>
          <div className="dummyWrapper"></div>
        </div>
      </div>
    </KYCLayout>
  );
}

export default index;
