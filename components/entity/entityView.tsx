import React, { useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faSchoolCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import { Button } from "@icodex-az/tariala-component-library";
import { globalState } from "types/global";
import AppContext from "@components/appContext";
interface infoType {
  BeneficialOwner: string;
  CodeAbbreviation: string;
  Nationality: string;
  HeadquartersLocation: string;
  IndustryType: string;
  CoreBusiness: string;
  IncorporationDate: string;
  LegalForm: string;
}
type Props = {
  infoData: infoType;
};
function EntityView({ infoData }: Props) {
  const myContext = useContext<globalState>(AppContext);
  return (
    <div className="viewContent">
      <div className="detailsContainer">
        <span>Details</span>
        <div className="card">
          <div className="cardImage">
            <Image
              layout="fixed"
              className="images"
              src="/assets/images/entity.png"
              alt=""
              width="140%"
              height="140%"
            ></Image>
          </div>
          <div className="right">
            <div className="mainTitle">
              <span>Engelbrecht Ltd</span>
            </div>
            <div className="lower">
              <div className="registration">
                <span>REGISTRATION NUMBER</span>
                <span>1214325136</span>
              </div>
              <div className="products">
                <span>PRODUCTS</span>
                <span>25</span>
              </div>
              <div className="applications">
                <span>APPLICATIONS</span>
                <span>39</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="informationsContainer">
        <span>Information</span>
        <div className="informationContent">
          <div className="infoItem">
            <div className="leftInfo">
              <span>Beneficial Owner</span>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
            <div className="rightInfo">
              <span>{infoData.BeneficialOwner}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Code/Abbreviation</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.CodeAbbreviation}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Nationality</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.Nationality}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Headquarters Location</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.HeadquartersLocation}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Industry Type</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.IndustryType}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Core Business</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.CoreBusiness}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Incorporation Date</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.IncorporationDate}</span>
            </div>
          </div>
          <div className="infoItem">
            <div className="leftInfo">
              <span>Legal Form</span>
            </div>
            <div className="rightInfo">
              <span>{infoData.LegalForm}</span>
            </div>
          </div>
        </div>
        <div className="infoAction">
          <div onClick={() => myContext.setDeleteModal(!myContext.deleteModal)}>
            <PortalIcons selected={false} icon={"delete"}></PortalIcons>
          </div>
          <Button
            label={"Edit Entity"}
            onClick={() => myContext.setEditModal(!myContext.editModal)}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default EntityView;
