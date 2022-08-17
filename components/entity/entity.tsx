import React from "react";
import Image from "next/image";
import { faEllipsis, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@components/modal/entityModal";
import { entityType } from "../../types";

type Props = {
  entityData: entityType;
};
function Entity({ entityData }: Props) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={"entityWrapper " + (toggle && "active")}
    >
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
