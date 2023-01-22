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
function TalModal({ modal, setModal }: Props) {
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
                    <div className="header">
                        Lock TAL
                        <span className="subtitle">
                            Select the amount you&apos;d like to lock.
                        </span>
                    </div>
                    <div className="form">
                        <span className="label">Lock tal info</span>
                        <div className="entityfield">
                            <span>Available amount 1,483.406843 TAL</span>
                            <input
                                className="inputs"
                                type="text"
                                placeholder="0.0"
                            ></input>
                        </div>
                        <div className="form-tal-info">
                            <PortalIcons selected={false} icon={"Exclamation"}></PortalIcons>
                            <p>Once you have staked your TAL tokens, they will be locked for at least 10 days (cooldown period).
                                Reminder: The cooldown has to be started manually.</p>
                        </div>
                        <div>
                            <button className="button" onClick={() => {
                                myContext.setLockSuccessModal(
                                    !myContext.lockSuccessModal
                                )
                                setModal(!modal);
                            }
                            }>
                                STAKE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TalModal;
