import React from "react";
import Topbar from "../topBar";
import TopBarNav from "../topBarNavigation";
import { useModal } from "@hooks/useModal";
import {
  ApplicationModalAtom,
  DeleteModalAtom,
  EditFormModalAtom,
  FormModalAtom,
} from "store/ModalStore";
import { DeleteModal } from "@taraldefi/tariala-component-library";
import FormModal from "@components/modal/entityFormModal";
import FormEditModal from "@components/modal/entityEditFormModal";
import NewApplicationModal from "@components/modal/newApplicationModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const deleteModal = useModal(DeleteModalAtom);
  const editModal = useModal(EditFormModalAtom);
  const applicationModal = useModal(ApplicationModalAtom);
  const newEntityModal = useModal(FormModalAtom);
  return (
    <>
      <div className="tabs">
        <div className="topbarFix">
          <Topbar />
          <TopBarNav />
        </div>
        <div className="mainBody">{children}</div>
        {/* {<BottomBar></BottomBar>} */}
      </div>
      <DeleteModal
        title="Delete Entity"
        onDelete={() => {}}
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

export default Layout;
