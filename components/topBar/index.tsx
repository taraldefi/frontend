import React from "react";
import { PortalIcons } from "../icons";
import { TopbarIconsData } from "./data";
import Image from "next/image";
const Topbar = () => {
  const [selectedId, setSelectedId] = React.useState<number>();
  function handleSelect(index: number) {
    setSelectedId(index);
  }
  return (
    <>
      <div className="tab">
        <div className="topbar">
          <div className="logoContainer">
            <Image
              className="images"
              src="/assets/images/logo.png"

              alt=""
              width="40%"
              height="40%"
            ></Image>
            <span className="header">Tariala</span>
          </div>
          <div className="icons">
            {TopbarIconsData.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelect(item.id);
                  }}
                  key={index}
                >
                  <PortalIcons
                    icon={item.icon}
                    selected={selectedId === item.id}
                  ></PortalIcons>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
