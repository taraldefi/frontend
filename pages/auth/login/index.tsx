import AuthLayout from "@components/layouts/auth_layout";
import ButtonIcon from "@components/widgets/buttonWithIcon";
import React from "react";

function Index() {
  return (
    <AuthLayout>
      <div className="accountContainer">
        <div className="titleWrapper">
          <div className="titleTop">
            <div className="accMainTitle">Login to account</div>
            <div className="accSubTitle">
              Enter you information to login to your account with the platform.
            </div>
          </div>
          <div className="titleBottom">
            <span>
              You&apos;ll be sent an OTP to verify your email before login in.
            </span>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="innerContainer1">
            <div className="mainTitle">ACCOUNT DETAILS</div>
            <div className="inputContainer">
              <span>Email</span>
              <input
                type="email"
                className="inputs"
                placeholder="Email address..."
              />
            </div>
            <div className="inputContainer">
              <span>Password</span>
              <input
                type="password"
                className="inputs"
                placeholder="Enter password..."
              />
            </div>
            <div className="inputContainer">
              <ButtonIcon title={"Send OTP"} icon={"lock"}></ButtonIcon>
            </div>
            <div className="fgP">
              <div className="inputContainer">
                <span>FORGOT PASSWORD</span>
              </div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="innerContainer2">
            <div className="mainTitle">OTP</div>
            <div className="inputContainer">
              <span>One-Time-Password</span>
              <input type="text" className="inputs" placeholder="OTP..." />
            </div>
            <div className="inputContainer">
              <div className="buttonBox">
                <ButtonIcon title={"Login"} icon={"right arow"}></ButtonIcon>
              </div>
            </div>
            <div className="fgP">
              <div className="inputContainer">
                <span>RESEND CODE</span>
              </div>
            </div>
          </div>
          <div className="dummyWrapper"></div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Index;
