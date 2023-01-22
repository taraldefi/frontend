import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import router from "next/router";
import ButtonSecondary from "@components/widgets/buttonSecondary";

type Props = {
    modal: Boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function LockSuccessModal({ modal, setModal }: Props) {
    console.log(modal)
    return (
        <div className={"lockSuccessModal " + (modal && "active")}>
            {modal && (
                <div className="modalMenue">
                    <div
                        onClick={() => {
                            setModal(!modal);
                            console.log(!modal);
                        }}
                        className="close"
                    >
                        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                    </div>

                    <div className="form">
                        <div className="lock-success-modal">
                            <div className="main-title">Lock Success!</div>
                            <div className="sub-title">Successfully broadcasted transaction!</div>
                            <div className="status">STATUS: PENDING</div>
                            <div className="button-container">
                                <ButtonSecondary title={"View Transaction"}
                                    onClick={() => {
                                        setModal(!true);
                                        console.log(!modal);
                                    }}
                                ></ButtonSecondary>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LockSuccessModal;
