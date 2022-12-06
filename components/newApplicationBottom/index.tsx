import Button from "@components/widgets/button";
import SecondButton from "@components/widgets/buttonSecondary";
import React from "react";

function BottomBar() {
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <SecondButton title={"Discard"} onClick={() => {}}></SecondButton>
          <Button title={"Next"} onClick={() => {}}></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
