import { PortalIcons } from "@components/icons";
import AuthLayout from "@components/layouts/auth_layout";
import { Button } from "@taraldefi/tariala-component-library";
import React from "react";

function Index() {
  const [selected, setSelected] = React.useState(false);
  return (
    <AuthLayout>
      <div className="accountContainer">
        <div className="titleWrapper">
          <div className="titleTop">
            <div className="accMainTitle">Create new account</div>
            <div className="accSubTitle">
              Enter you information to create a new account with the platform.
            </div>
          </div>
          <div className="titleBottomR"></div>
        </div>
        <div className="contentWrapper">
          <div className="innerContainer1">
            <div className="mainTitle">PERSONAL INFO</div>
            <div className="inputContainer">
              <span>First Name</span>
              <input
                type="text"
                className="inputs"
                placeholder="First name..."
              />
            </div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Middle Name</span>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Middle name..."
                />
              </div>
              <div className="inputContainer">
                <span>Last Name</span>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Last name..."
                />
              </div>
            </div>
            <div className="inputContainer">
              <span>Nationality</span>
              <select name="" className="inputs" id="">
                <option value="">Select nationality...</option>
              </select>
            </div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Gender</span>
                <select name="" className="inputs" id="">
                  <option value="">Select gender...</option>
                </select>
              </div>
              <div className="inputContainer">
                <span>Date of Birth</span>
                <input type="date" className="inputs" id="calendar" />
              </div>
            </div>
          </div>
          <div className="vLineT"></div>
          <div className="innerContainer2">
            <div className="mainTitle">ID DETAILS</div>
            <div className="inputContainer">
              <span>ID Type</span>
              <select name="" className="inputs" id="">
                <option value="">Select type...</option>
              </select>
            </div>
            <div className="inputContainer">
              <span>ID Number</span>
              <input type="text" className="inputs" placeholder="Number..." />
            </div>
            <div className="inputContainer">
              <span>ID Expiry</span>
              <input type="date" className="inputs" id="calendar" />
            </div>
          </div>
          <div className="vLine"></div>
          <div className="dummyWrapper">
            <div className="mainTitle">AGREEMENT</div>
            <div className="inputContainer">
              <div className="agreementBox">
                <div
                  className="iconContainer"
                  onClick={() => setSelected(!selected)}
                >
                  <PortalIcons
                    selected={selected}
                    icon={"checkBox"}
                  ></PortalIcons>
                </div>
                <span>
                  I agree that I&apos;ve read and accept the{" "}
                  <span className="greened">Terms of Service</span> and{" "}
                  <span className="greened">Privacy Policy</span>.
                </span>
              </div>
            </div>
            <div className="inputContainer">
              <div className="buttonBox">
                <Button
                  primary={true}
                  backgroundColor="#1AB98B"
                  icon={
                    <PortalIcons
                      selected={false}
                      icon={"right arow"}
                    ></PortalIcons>
                  }
                  label="Create Account"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Index;
