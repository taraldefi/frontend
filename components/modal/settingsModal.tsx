import { PortalIcons } from "@components/icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@taraldefi/tariala-component-library";
import { useModal } from "@utils/hooks";

import { SettingsModalAtom } from "store/ModalStore";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
function SettingsModal({ isOpen, onClose }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={"settingsModal " + (isOpen && "active")}>
      {isOpen && (
        <div className="modalMenue">
          <div className="header">
            Settings
            <div className="lastItem">
              <Button onClick={() => {}} label={"View All"}></Button>
            </div>
          </div>
          <div className="form">
            <div
              style={{ gap: "5px", display: "flex", flexDirection: "column" }}
            >
              <span>Currency</span>
              <select>
                <option value="">Select currency</option>
                <option value=""></option>
              </select>
            </div>
            <div
              style={{ gap: "5px", display: "flex", flexDirection: "column" }}
            >
              <span>Language</span>
              <select>
                <option value="">Select language...</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsModal;
