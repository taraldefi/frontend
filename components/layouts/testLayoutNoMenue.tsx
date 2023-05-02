import LeftMenu from "@components/kycLeftMenu";
import React, { useContext } from "react";
import { globalState } from "types/global";
import Topbar from "../topBar";
import TopBarNav from "../topBarNavigation";
import { useModal } from "@hooks/useModal";
import {
  ApplicationModalAtom,
  DeleteModalAtom,
  EditFormModalAtom,
  FormModalAtom,
} from "store/ModalStore";
import DeleteModal from "@components/modal/deleteModal";
import FormModal from "@components/modal/entityFormModal";
import FormEditModal from "@components/modal/entityEditFormModal";
import NewApplicationModal from "@components/modal/newApplicationModal";
interface LayoutProps {
  children: React.ReactNode;
}

const NewLayoutNM = ({ children }: LayoutProps) => {
  const deleteModal = useModal(DeleteModalAtom);
  const editModal = useModal(EditFormModalAtom);
  const applicationModal = useModal(ApplicationModalAtom);
  const newEntityModal = useModal(FormModalAtom);
  return (
    <>
      <div className="bodyContainer">
        <div className="topbarFix1">
          <Topbar />
          <TopBarNav />
        </div>
        <div className="mainBody1">
          <div className="mainBodyIn">{children}</div>
        </div>
      </div>
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => deleteModal.close()}
      ></DeleteModal>
      <FormModal
        isOpen={newEntityModal.isOpen}
        onClose={() => newEntityModal.close()}
      ></FormModal>
      <FormEditModal
        isOpen={editModal.isOpen}
        onClose={() => editModal.close()}
      ></FormEditModal>
      <NewApplicationModal
        isOpen={applicationModal.isOpen}
        onClose={() => applicationModal.close()}
      ></NewApplicationModal>
    </>
  );
};

export default NewLayoutNM;
