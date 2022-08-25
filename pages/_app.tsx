import "@styles/globals.scss";
import "@styles/main.scss";
import "@styles/topbar.scss";
import "@styles/leftMenu.scss";
import "@styles/summary.scss";
import "@styles/status.scss";
import "@styles/button.scss";
import "@styles/fileUpload.scss";
import "@styles/activity.scss";
import "@styles/compliance.scss";
import "@styles/research.scss";
import "@styles/slider.scss";
import "@styles/rating.scss";
import "@styles/transactions.scss";
import "@styles/financials.scss";
import "@styles/signoff.scss";
import "@styles/user.scss";
import "@styles/entityView.scss";
import "@styles/modal.scss";
import "@styles/exporterInfo.scss";
import type { AppProps } from "next/app";
import FormModal from "@components/modal/entityFormModal";
import { useContext } from "react";
import { globalState } from "types/global";
import AppContext from "@components/appContext";
import React from "react";
import FormEditModal from "@components/modal/entityEditFormModal";
import DeleteModal from "@components/modal/deleteModal";
function MyApp({ Component, pageProps }: AppProps) {
  const [fmodal, setfModal] = React.useState(false);
  const [emodal, seteModal] = React.useState(false);
  const [dmodal, setdModal] = React.useState(false);

  const values = {
    modal: fmodal,
    setModal: setfModal,
    editModal: emodal,
    setEditModal: seteModal,
    deleteModal: dmodal,
    setDeleteModal: setdModal,
  };
  return (
    <AppContext.Provider value={values}>
      {(values.modal || values.editModal || values.deleteModal) && (
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
        </>
      )}

      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export default MyApp;
