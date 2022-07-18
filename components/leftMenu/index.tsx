import React from "react";
import { SidebarData } from "./data";
import { PortalIcons } from "../icons";
import { useRouter } from "next/router";
import Progress from "../widgets/progressBar";

export default function LeftMenu() {
  const router = useRouter();

  return (
    <div className="leftMenu">
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
              <PortalIcons
                icon={item.title}
                selected={item.path == router.asPath}
              />
              <span className={item.path == router.asPath ? "selected" : ""}>
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="progressBox">
        <Progress progress={27} color={"#003C6E"} showText={true} />
      </div>
    </div>
  );
}
