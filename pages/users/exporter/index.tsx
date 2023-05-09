import Layout from "@components/layouts/layout";
import { Entity } from "@taraldefi/tariala-component-library";
import React from "react";
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
