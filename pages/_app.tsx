import "@styles/globals.scss";
import type { AppProps } from "next/app";
import FormModal from "@components/modal/entityFormModal";
import { useContext } from "react";
import { globalState } from "types/global";
import AppContext from "@components/appContext";
import React from "react";
import FormEditModal from "@components/modal/entityEditFormModal";
import DeleteModal from "@components/modal/deleteModal";
import NewApplicationModal from "@components/modal/newApplicationModal";
function MyApp({ Component, pageProps }: AppProps) {
  const [fmodal, setfModal] = React.useState(false);
  const [emodal, seteModal] = React.useState(false);
  const [dmodal, setdModal] = React.useState(false);
  const [amodal, setaModal] = React.useState(false);

  const values = {
    modal: fmodal,
    setModal: setfModal,
    editModal: emodal,
    setEditModal: seteModal,
    deleteModal: dmodal,
    setDeleteModal: setdModal,
    newApplicationModal: amodal,
    setNewApplicationModal: setaModal,
  };
  return (
    <AppContext.Provider value={values}>
      {(values.modal ||
        values.editModal ||
        values.deleteModal ||
        values.newApplicationModal) && (
        <>
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
