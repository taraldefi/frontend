import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import { globalState } from "types/global";
import AppContext from "@components/appContext";

type Props = {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function YieldModal({ modal, setModal }: Props) {
  const myContext = useContext<globalState>(AppContext);
  return (
    <div className={"formModal " + (modal && "active")}>
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

          <div className="header ">
            <div className="yield-icon ">
              {" "}
              <PortalIcons selected={false} icon={"tal icon"}></PortalIcons>
            </div>
            Cauris Fund #4 <br /> <br />
            <span className="yield-subtitle">
              Stake your STX/USDA LP tokens at 39.72% (estimated APR) and start
              earning rewards now.
            </span>
          </div>
          <div className="form">
            <div className="entityfield">
              <span>Available amount 1,483.406843 USDC</span>
              <div className="custom-input">
                <input
                  type="number"
                  className="custom-input-input"
                  placeholder="0.0"
                />
                <button className="custom-input-text">USDC</button>
                <div className="vl"></div>
                <button className="custom-input-button" type="submit">
                  MAX
                </button>
              </div>
            </div>

            <div>
              <button
                className="button"
                onClick={() => {
                  myContext.setStakeSuccessModal(!myContext.stakeSuccessModal);
                  setModal(!modal);
                }}
              >
                STAKE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default YieldModal;
