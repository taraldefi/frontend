import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import router from "next/router";

type Props = {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function NewApplicationModal({ modal, setModal }: Props) {
  const nextpath = router.asPath.split("/")[2] == "exporter" ?
    "/users/exporter/quick/exporterInfo" :
    router.asPath.split("/")[2] == "importer" ?
      "/users/importer/quick/exporterInfo":  "";
  return (
    <div className={"newApplicationModal " + (modal && "active")}>
      {modal && (
        <div className="modalMenue">
          <div
            onClick={() => {
              setModal(!modal);
            }}
            className="close"
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </div>

          <div className="form">
            <div className="quickAppli">
              <div className="svgContainer">
                <PortalIcons selected={false} icon={"quick appli"} />
              </div>
              <div className="header-application">Quick Application</div>
              <div className="info-application">
                Add basic application info and fill the rest later.
              </div>
              <div className="buttonContainer">
                <button className="btn"
                  onClick={() => {
                    router.push(nextpath.toString());
                    setModal(false);
                  }}
                >start</button>
              </div>
            </div>
            <div className="vLine"></div>
            <div className="fullAppli">
              <div className="svgContainer">
                <PortalIcons selected={false} icon={"full appli"} />
              </div>
              <div className="header-application">full Application</div>
              <div className="info-application">
                Fill all the forms requirements and info now.
              </div>
              <div className="buttonContainer">
                <button
                  className="btn"
                  onClick={() => {
                    router.push("/users/exporter/newApplication/exporterInfo");
                    setModal(false);
                  }}
                >
                  start
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewApplicationModal;
