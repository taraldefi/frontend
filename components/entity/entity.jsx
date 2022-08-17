import React from 'react'
import Image from "next/image";
import { faEllipsis, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from '@components/modal/entityModal';

function Entity() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div onClick={() => setToggle(!toggle)} className={"entityWrapper " +(toggle && "active")}>
      <div className="entityTopContent">
        <div className="entityImageContainer">
          <Image
            className="images"
            src="/assets/images/entity.png"

            alt=""
            width="100%"
            height="100%"
          ></Image>
        </div>
        <div className="entityTitleBox">
          <span>Mueller and Sons</span>
          <span>55-NB</span>
        </div>
        <div className="optionsContainer">
          <Modal/>
        </div>
      </div>
      <div className="bottomContent">
        <div className="registrationContainer">
          <span>REGISTRATION NUMBER</span>
          <span>1234567890-12345</span>
        </div>
        <div className="productContainer">
          <span>PRODUCTS</span>
          <span>25</span>
        </div>
        <div className="applicationsContainer">
          <span>APPLICATIONS</span>
          <span>39</span>
        </div>
      </div>
    </div>
  )
}

export default Entity