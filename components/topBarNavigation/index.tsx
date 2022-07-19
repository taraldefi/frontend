import React from "react";
import { useRouter } from "next/router";
import { TopbarData } from "./data";
import { match } from "assert";
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
    </div>
  );
}

export default TopBarNav;
