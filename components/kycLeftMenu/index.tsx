import React from "react";
import { PortalIcons } from "../icons";
import { useRouter } from "next/router";
import Progress from "../widgets/progressBar";
import { SidebarData } from "./data";

export default function LeftMenu() {
  const router = useRouter();
  function checkActive(item: any) {
    const result = router.asPath.split("/").map((element) => element.trim());
    const match = result.find((element) => {
      if (element == item.name.toLowerCase()) {
        return true;
      }
    });

    if (item.path == router.asPath) {
      return true;
    } else if (item.name == "summary" && router.asPath == "/") {
      return true;
    } else if (match) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="leftMenuKyc">
      <div className="items">
        {SidebarData.map((item, index) => {
          return (
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path);
              }}
              key={index}
              className="item"
            >
              <PortalIcons icon={item.title} selected={checkActive(item)} />
              <span className={checkActive(item) ? "selected" : ""}>
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
