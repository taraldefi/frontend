import React from "react";
import { useRouter } from "next/router";
import { TopbarData } from "./data";
import Button from "@components/widgets/button";
import AppContext from "@components/appContext";
import { useContext } from "react";
import { globalState } from "../../types/global";

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
  return (
    <div className="topbarLower">
      {router.asPath == "/users/admin" || router.asPath == "/users/view" ? (
        <div className="entityContent">
          <input
            type="text"
            placeholder="Search by name or number..."
            className="inputs"
          ></input>
          <Button
            title={"New Entity"}
            onClick={() => {
              myContext.setModal(!myContext.modal);
            }}
          />
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
