import Layout from "@components/layouts/layout";
import Entity from "@components/entity/entity";
import React from "react";
import FormModal from "@components/modal/entityFormModal";
import AppContext from "@components/appContext";
import DeleteModal from "@components/modal/deleteModal";
import FormEditModal from "@components/modal/entityEditFormModal";

const data = {
  id: 1,
  image: "/assets/images/entity.png",
  title: "Ullrich Weigel",
  registrationNo: 1,
  products: 25,
  applications: 25,
};

function Index() {
  const [fmodal, setfModal] = React.useState(false);
  const values = {
    modal: fmodal,
    setModal: setfModal,
  };

  return (
    <AppContext.Provider value={values}>
      <FormModal
        modal={values.modal}
        setModal={() => {
          values.setModal(!values.modal);
        }}
      ></FormModal>

      <Layout>
        <div className="entityContainer">
          <div className="entity">
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
            <Entity entityData={data} />
          </div>
        </div>
      </Layout>
    </AppContext.Provider>
  );
}

export default Index;
