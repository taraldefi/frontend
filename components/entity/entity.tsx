import React from "react";
import Image from "next/image";
import Modal from "@components/modal/entityModal";
import { entityType } from "../../types";

type Props = {
  entityData: entityType;
};
function Entity({ entityData }: Props) {
  return (
    <div className={"entityWrapper"}>
      <div className="entityTopContent">
        <div className="entityImageContainer">
          <Image
            className="images"
            src={entityData.image}
            alt=""
            width="100%"
            height="100%"
          ></Image>
        </div>
        <div className="entityTitleBox">
          <span>{entityData.title}</span>
          <span>55-NB</span>
        </div>
        <div className="optionsContainer">
          <Modal />
        </div>
      </div>
      <div className="bottomContent">
        <div className="registrationContainer">
          <span>REGISTRATION NUMBER</span>
          <span>{entityData.registrationNo}</span>
        </div>
        <div className="productContainer">
          <span>PRODUCTS</span>
          <span>{entityData.products}</span>
        </div>
        <div className="applicationsContainer">
          <span>APPLICATIONS</span>
          <span>{entityData.applications}</span>
        </div>
      </div>
    </div>
  );
}

export default Entity;