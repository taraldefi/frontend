import { Button } from "@taraldefi/tariala-component-library";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { pageIndexAtom } from "store/PageIndexStore";

function BottomBar() {
  const router = useRouter();
  const [index, setIndex] = useAtom(pageIndexAtom);
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
              console.log(index);
              if (index > paths.length - 1) {
                router.push(`/users/exporter/applications`);
                setIndex(0);
                return;
              }
              setIndex(index + 1);
              router.push(`/users/exporter/quick/${paths[index]}`);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
