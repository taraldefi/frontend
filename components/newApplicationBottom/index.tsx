import { Button } from "@icodex-az/tariala-component-library";

import React from "react";

function BottomBar() {
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <Button label={"Discard"} onClick={() => {}}></Button>
          <Button
            backgroundColor="#1ab98b"
            primary={true}
            label={"Next"}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
