
import { Button } from "@icodex-az/tariala-component-library";
import React from "react";


function BottomBar() {
  const router = useRouter();
  const myContext = useContext<globalState>(AppContext);
  const paths = ["exporterInfo", "importerInfo", "paymentTerms", "security"];
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <Button label={"Discard"} onClick={() => {}}></Button>
          <Button
            backgroundColor="#1ab98b"
            primary={true}
            label={
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
