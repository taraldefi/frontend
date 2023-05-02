import Layout from "@components/layouts/layout";
import Entity from "@components/entity/entity";
import React from "react";
import FormModal from "@components/modal/entityFormModal";
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
  return (
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
  );
}

export default Index;
