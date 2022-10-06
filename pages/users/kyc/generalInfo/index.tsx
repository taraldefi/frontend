import { PortalIcons } from "@components/icons";
import KYCLayout from "@components/layouts/kycLayout";
import Layout from "@components/layouts/layout";
import Button from "@components/widgets/button";
import SecondButton from "@components/widgets/buttonSecondary";
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
            <div className="allWrapper">
              <div>
                <div className="splitBox">
                  <div className="inputContainer">
                    <span>Nationality</span>
                    <select className="inputs" name="" id="">
                      <option value="">Switzerland</option>
                    </select>
                  </div>
                  <div className="inputContainer">
                    <span>Headquarters Location</span>
                    <div className="specialWrapper"><select className="inputs" name="" id="">
                      <option value="">Berlin</option>
                    </select>
                      <PortalIcons selected={false} icon={"delete"}></PortalIcons></div>
                  </div>
                </div>
                <div className="splitBox">
                  <div className="inputContainer">
                    <span>Nationality</span>
                    <select className="inputs" name="" id="">
                      <option value="">France</option>
                    </select>
                  </div>
                  <div className="inputContainer">
                    <span>Headquarters Location</span>
                    <div className="specialWrapper"><select className="inputs" name="" id="">
                      <option value="">Parice</option>
                    </select>
                      <PortalIcons selected={false} icon={"delete"}></PortalIcons></div>
                  </div>
                </div>
              </div>
              <div className="buttonContainer">
                <SecondButton title={"+ New Branch"} onClick={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                  throw new Error("Function not implemented.");
                }}></SecondButton>
              </div>
            </div>
          </div>
          <div className="dummyWrapper"></div>
        </div>
      </div>
    </KYCLayout>
  );
}

export default index;
