import "@styles/globals.scss";
import type { AppProps } from "next/app";
import FormModal from "@components/modal/entityFormModal";
import AppContext from "@components/appContext";
import React from "react";
import FormEditModal from "@components/modal/entityEditFormModal";
import DeleteModal from "@components/modal/deleteModal";
import NewApplicationModal from "@components/modal/newApplicationModal";
import TalModal from "@components/modal/talModal";
import LockSuccessModal from "@components/modal/lockSuccessModal";
import YieldModal from "@components/modal/yieldModal";
import StakeSuccessModal from "@components/modal/stakeSuccessModal";
function MyApp({ Component, pageProps }: AppProps) {
  const [fmodal, setfModal] = React.useState(false); // form modal
  const [emodal, seteModal] = React.useState(false); // edit form modal
  const [dmodal, setdModal] = React.useState(false); // delete modal
  const [amodal, setaModal] = React.useState(false); // application modal
  const [tmodal, settModal] = React.useState(false); // tal modal
  const [lmodal, setlModal] = React.useState(false); // lock asset modal
  const [ymodal, setyModal] = React.useState(false); // yield modal
  const [smodal, setsModal] = React.useState(false); // stake success modal

  const values = {
    modal: fmodal,
    setModal: setfModal,
    editModal: emodal,
    setEditModal: seteModal,
    deleteModal: dmodal,
    setDeleteModal: setdModal,
    newApplicationModal: amodal,
    setNewApplicationModal: setaModal,
    talModal: tmodal,
    setTalModal: settModal,
    lockSuccessModal: lmodal,
    setLockSuccessModal: setlModal,
    yieldModal: ymodal,
    setYieldModal: setyModal,
    stakeSuccessModal: smodal,
    setStakeSuccessModal: setsModal,
  };
  return (
    <AppContext.Provider value={values}>
      {(values.modal ||
        values.editModal ||
        values.deleteModal ||
        values.talModal ||
        values.lockSuccessModal ||
        values.newApplicationModal ||
        values.yieldModal ||
        values.stakeSuccessModal) && (
        <>
          <LockSuccessModal
            modal={values.lockSuccessModal}
            setModal={() => {
              values.setTalModal(!values.lockSuccessModal);
            }}
          ></LockSuccessModal>
          <TalModal
            modal={values.talModal}
            setModal={() => {
              values.setTalModal(!values.talModal);
            }}
          ></TalModal>
          <YieldModal
            modal={values.yieldModal}
            setModal={() => {
              values.setYieldModal(!values.yieldModal);
            }}
          ></YieldModal>
          <StakeSuccessModal
            modal={values.stakeSuccessModal}
            setModal={() => {
              values.setStakeSuccessModal(!values.stakeSuccessModal);
            }}
          ></StakeSuccessModal>
          <FormModal
            modal={values.modal}
            setModal={() => {
              values.setModal(!values.modal);
            }}
          ></FormModal>
          <FormEditModal
            modal={values.editModal}
            setModal={() => values.setEditModal(!values.editModal)}
          ></FormEditModal>
          <DeleteModal
            modal={values.deleteModal}
            setModal={() => values.setDeleteModal(!values.deleteModal)}
          ></DeleteModal>
          <NewApplicationModal
            modal={values.newApplicationModal}
            setModal={() =>
              values.setNewApplicationModal(!values.newApplicationModal)
            }
          ></NewApplicationModal>
        </>
      )}

      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export default MyApp;
