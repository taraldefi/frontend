import React from "react";
import { useRouter } from "next/router";
import { TopbarData } from "./data";
import { match } from "assert";
import ButtonIcon from "@components/widgets/buttonWithIcon";
import ButtonWithIcon from "@components/widgets/buttonWithIcon";
import SecondButton from "@components/widgets/buttonSecondary";
import Button from "@components/widgets/button";
function TopBarNav() {
  const router = useRouter();
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
      {router.asPath == "/users/admin" || "/users/view" ? (
        <div className="entityContent">
          <input
            type="text"
            placeholder="Search by name or number..."
            className="inputs"
          ></input>
          <Button
            title={"New Entity"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
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
