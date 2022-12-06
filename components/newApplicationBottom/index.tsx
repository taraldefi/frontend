import Button from "@components/widgets/button";
import SecondButton from "@components/widgets/buttonSecondary";
import React from "react";

function BottomBar() {
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <SecondButton
            title={"Discard"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></SecondButton>
          <Button
            title={"Next"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
