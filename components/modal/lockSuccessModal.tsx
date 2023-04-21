import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import router from "next/router";
import AppContext from "@components/appContext";
import { Button } from "@icodex-az/tariala-component-library";
import { globalState } from "types/global";

type Props = {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function LockSuccessModal({ modal, setModal }: Props) {
  const myContext = useContext<globalState>(AppContext);
  return (
    <div className={"lockSuccessModal " + (modal && "active")}>
      {modal && (
        <div className="modalMenue">
          <div
            onClick={() => {
              myContext.setLockSuccessModal(!myContext.lockSuccessModal);
            }}
            className="close"
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </div>

          <div className="form">
            <div className="lock-success-modal">
              <div className="main-title">Lock Success!</div>
              <div className="sub-title">
                Successfully broadcasted transaction!
              </div>
              <div className="status">STATUS: PENDING</div>
              <div className="button-container">
                <Button
                  label={"View Transaction"}
                  onClick={() => {
                    myContext.setLockSuccessModal(!myContext.lockSuccessModal);
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LockSuccessModal;
