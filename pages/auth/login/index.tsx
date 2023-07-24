import { PortalIcons } from "@components/icons";
import AuthLayout from "@components/layouts/auth_layout";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@taraldefi/tariala-component-library";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Index() {
  const [visible, setVisisblity] = React.useState(false);
  const router = useRouter();
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? faEye : faEyeSlash}
      onClick={() => {
        setVisisblity(!visible);
      }}
    />
  );
  const InputType = visible ? "text" : "password";

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  type Inputs = {
    email: string;
    phoneNo: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      phoneNo: "",
      password: "",
    },
  });
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
          <form onSubmit={handleSubmit(onSubmit)} className="innerContainer1">
            <div className="mainTitle">ACCOUNT DETAILS</div>
            <div className="inputContainer">
              <span>Email</span>
              <input
                type="email"
                className={errors.email ? "inputsRed" : "inputs"}
                placeholder="Email address..."
                {...register("email", { required: true })}
              />
            </div>
            <div className="inputContainer">
              <span>Phone Number</span>
              <input
                type="text"
                className={errors.phoneNo ? "inputsRed" : "inputs"}
                placeholder="Phone Number..."
                {...register("phoneNo", { required: true })}
              />
            </div>
            <div className="inputContainer">
              <span>Password</span>
              <input
                type={InputType}
                className={errors.password ? "inputsRed" : "inputs"}
                placeholder="Enter password..."
                {...register("password", { required: true })}
              />
              <div className="parent">
                <div className="iconPassword">{Icon}</div>
              </div>
            </div>
            {(errors.password || errors.email) && (
              <div className="inputContainer">
                <div className="errorMessage">
                  Please fill all the required fields.
                </div>
              </div>
            )}
            <div className="inputContainer">
              <Button label={"Send OTP"}></Button>
            </div>
            <div className="fgP">
              <div className="inputContainer">
                <span>FORGOT PASSWORD</span>
              </div>
            </div>
          </form>
          <div className="vLine"></div>
          <div className="innerContainer2">
            <div className="mainTitle">OTP</div>
            <div className="inputContainer">
              <span>One-Time-Password</span>
              <input type="text" className="inputs" placeholder="OTP..." />
            </div>
            <div className="inputContainer">
              <div className="buttonBox">
                <Button
                  onClick={() => {
                    router.push("/users/importer/entities");
                  }}
                  label={"Login"}
                  icon={
                    <PortalIcons
                      selected={false}
                      icon={"right arow"}
                    ></PortalIcons>
                  }
                ></Button>
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
