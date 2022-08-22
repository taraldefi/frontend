import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";


type Props = {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function DeleteModal({ modal, setModal }: Props) {
  return (
    <div className={"deleteModal " + (modal && "active")}>
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
            Delete &quot;Entity name&quot;
            <span className="subtitle">
              Are you sure you want to delete &quot;Entity Name&quot;? This is
              an irreversible action and the data associated with this entity
              will be deleted.
            </span>
          </div>
          <div className="form">
            <button className="button" onClick={() => {}}>
              Delete Entity
            </button>
            <button
              className="buttonEdit"
              onClick={() => {
                setModal(false);
              }}
            >
              Keep it for now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteModal;
