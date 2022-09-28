import React from "react";
import { useRouter } from "next/router";
import { TopbarData } from "./data";
import Button from "@components/widgets/button";
import AppContext from "@components/appContext";
import { useContext } from "react";
import { globalState } from "../../types/global";
import SecondButton from "@components/widgets/buttonSecondary";

function TopBarNav() {
  const router = useRouter();
  const myContext = useContext<globalState>(AppContext);

  const matchPath = (item: any) => {
    const currentRoute = router.asPath.split("/")[1];
    console.log(currentRoute);

    if (currentRoute === item.name.toLowerCase()) {
      return true;
    } else if (
      item.name.toLowerCase() == "applications" &&
      router.asPath == "/"
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(router.asPath);
  return (
    <div className="topbarLower">
      {router.asPath == "/users/admin" || router.asPath == "/users/view" ? (
        <div className="entityContent">
          {router.asPath == "/users/admin" ?
            <div className="entitySearch"><input
              type="text"
              placeholder="Search by name or number..."
              className="inputs"
            ></input></div>
            :
            <div className="viewEntitySelect">
              <select name="" id="" className="inputs">
                <option value="">Entity Name</option>
              </select>
            </div>
          }
          <SecondButton title={"New Entity"} onClick={() => {
            console.log("debug 1:", open);
            myContext.setModal(!myContext.modal);
          }}></SecondButton>
          <Button title={"New Application"} onClick={function (): void {
            router.push("/users/newApplication/exporterInfo")
          }}></Button>
        </div>
      ) : (
        <div className="contents">
          {TopbarData.map((item, index) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.path);
                }}
                key={index}
              >
                <span
                  className={matchPath(item) ? "content selected" : "content"}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TopBarNav;
