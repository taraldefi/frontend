import Image from "next/image";
import { useRouter } from "next/router";
import { PortalIcons } from "../icons";
import useModal from "@hooks/useModal";
import { NotificationModalAtom, SettingsModalAtom } from "store/ModalStore";
import SettingsModal from "@components/modal/settingsModal";
import { Button } from "@taraldefi/tariala-component-library";
const Topbar = () => {
  const router = useRouter();
  const settingsModal = useModal(SettingsModalAtom);
  const notificationModal = useModal(NotificationModalAtom);
  const handleModalClick = (clickedModal: any, otherModal: any) => {
    if (clickedModal.isOpen) {
      clickedModal.close();
    } else {
      if (otherModal.isOpen) {
        otherModal.close();
      }
      clickedModal.open();
    }
  };

  return (
    <>
      <div className="tab">
        <div className="topbar">
          <div className="logoContainer">
            <Image
              className="images"
              src="/assets/images/logo.png"
              alt=""
              width={40}
              height={40}
            ></Image>
            <span className="header">Tariala</span>
          </div>
          <div className="icons">
            <div
              onClick={() => {
                router.push("/profile");
              }}
            >
              <PortalIcons
                icon={"user"}
                selected={router.asPath === "/profile"}
              ></PortalIcons>
            </div>
            <div
              onClick={() => {
                handleModalClick(notificationModal, settingsModal);
              }}
            >
              <PortalIcons
                icon={"bell"}
                selected={notificationModal.isOpen}
              ></PortalIcons>
            </div>
            <div
              onClick={() => {
                handleModalClick(settingsModal, notificationModal);
              }}
            >
              <PortalIcons
                icon={"settings"}
                selected={settingsModal.isOpen}
              ></PortalIcons>
            </div>
          </div>
          <Button
            primary
            backgroundColor="#003C6E"
            label="CONNECT WALLET"
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
