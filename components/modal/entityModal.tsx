import React, { useContext } from "react";
import { faEllipsis, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortalIcons } from "@components/icons";
import router from "next/router";
import { useModal } from "@hooks/useModal";
import { DeleteModalAtom, EditFormModalAtom } from "store/ModalStore";

function Modal() {
  const [modal, setModal] = React.useState(false);
  const editModal = useModal(EditFormModalAtom);
  const deleteModal = useModal(DeleteModalAtom);
  return (
    <div className={"modal"} onClick={() => setModal(!modal)}>
      <div className={"iconEntityOption " + (modal && "active")}>
        <FontAwesomeIcon
          icon={faEllipsis}
          className="iconx"
          fontSize={18}
          color="#0D8489"
        ></FontAwesomeIcon>
      </div>
      <div className={"modalContainer " + (modal && "active")}>
        {modal && (
          <div className="modalMenue">
            <div
              className="modalViewButton"
              onClick={() => {
                router.push("/users/exporter/view");
              }}
            >
              <PortalIcons selected={false} icon={"eye"}></PortalIcons>
              <span>View</span>
            </div>
            <div onClick={() => editModal.open()}>
              <PortalIcons selected={false} icon={"pen"}></PortalIcons>
              <span>Edit</span>
            </div>
            <span></span>
            <div onClick={() => deleteModal.open()}>
              <PortalIcons selected={false} icon={"delete"}></PortalIcons>
              <span>Delete</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
