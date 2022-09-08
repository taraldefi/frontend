import React, { useContext } from "react";
import { faEllipsis, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortalIcons } from "@components/icons";
import router from "next/router";
import { globalState } from "types/global";
import AppContext from "@components/appContext";
function Modal() {
  const myContext = useContext<globalState>(AppContext);
  const [modal, setModal] = React.useState(false);
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
                router.push("/users/view");
              }}
            >
              <PortalIcons selected={false} icon={"eye"}></PortalIcons>
              <span>View</span>
            </div>
            <div onClick={() => myContext.setEditModal(!myContext.editModal)}>
              <PortalIcons selected={false} icon={"pen"}></PortalIcons>
              <span>Edit</span>
            </div>
            <span></span>
            <div
              onClick={() => myContext.setDeleteModal(!myContext.deleteModal)}
            >
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