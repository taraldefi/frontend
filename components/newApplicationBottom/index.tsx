import AppContext from "@components/appContext";
import Button from "@components/widgets/button";
import SecondButton from "@components/widgets/buttonSecondary";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { globalState } from "types/global";

function BottomBar() {
  const router = useRouter();
  const myContext = useContext<globalState>(AppContext);
  const paths = ["exporterInfo", "importerInfo", "paymentTerms", "security"];
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <SecondButton title={"Discard"} onClick={() => {}}></SecondButton>
          <Button
            title={
              paths.indexOf(router.asPath.split("/")[4]) === paths.length - 1
                ? "Finish Application"
                : "Next"
            }
            onClick={() => {
              console.log(myContext.index!);
              if (myContext.index! > paths.length - 1) {
                router.push(`/users/exporter/applications`);
                myContext.setIndex!(0);
                return;
              }
              if (!myContext.index!) {
                router.push(`/users/exporter/quick/${paths[1]}`);
              }

              router.push(`/users/exporter/quick/${paths[myContext.index!]}`);
              myContext.setIndex!(myContext.index! + 1);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
