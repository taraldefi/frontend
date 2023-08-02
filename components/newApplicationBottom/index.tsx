import { Button } from "@taraldefi/tariala-component-library";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { pageIndexAtom } from "store/PageIndexStore";

function BottomBar({ onSubmit }: any) {
  const router = useRouter();
  const [index, setIndex] = useAtom(pageIndexAtom);
  const entityID = router.query.entityId;
  const paths = [
    "exporterInfo",
    "importerInfo",
    "contract",
    "paymentTerms",
    "security",
    "transactionDocs",
  ];
  const handleNextClick = () => {
    const nextIndex = index + 1;
    if (nextIndex >= paths.length) {
      router.push(
        `/users/${
          router.asPath.split("/")[2]
        }/entities/${entityID}/applications`
      );
      setIndex(0);
    } else {
      router.push(
        `/users/${router.asPath.split("/")[2]}/entities/${entityID}/quick/${
          paths[nextIndex]
        }`
      );
      setIndex(nextIndex);
    }
  };
  return (
    <div className="botomBar">
      <div className="bbBackground">
        <div className="btnContainer">
          <Button label={"Discard"} onClick={() => {}}></Button>
          <Button
            backgroundColor="#1ab98b"
            primary={true}
            label={
              paths.indexOf(router.asPath.split("/")[6]) === paths.length - 1
                ? "Finish Application"
                : router.asPath.split("/")[6] === "contract"
                ? "Agree & Continue"
                : "Next"
            }
            onClick={onSubmit}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
