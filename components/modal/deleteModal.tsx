import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
function DeleteModal({ isOpen, onClose }: Props) {
  return (
    <div className={"deleteModal " + (isOpen && "active")}>
      {isOpen && (
        <div className="modalMenue">
          <div
            onClick={() => {
              onClose();
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
                onClose();
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
