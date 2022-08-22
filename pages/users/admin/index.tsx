import Layout from "@components/layouts/layout";
import Entity from "@components/entity/entity";
import React from "react";

function index() {
  return (
    <Layout>
      <div className="entityContainer">
        <div className="entity">
          <Entity
            entityData={{
              id: 11,
              image: "/assets/images/entity.png",
              title: "string",
              registrationNo: 55,
              products: 6,
              applications: 5,
            }}
          />
          <Entity
            entityData={{
              id: 11,
              image: "/assets/images/entity.png",
              title: "string",
              registrationNo: 55,
              products: 6,
              applications: 5,
            }}
          />
          <Entity
            entityData={{
              id: 11,
              image: "/assets/images/entity.png",
              title: "string",
              registrationNo: 55,
              products: 6,
              applications: 5,
            }}
          />
          {/* <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } />
          <Entity entityData={ } /> */}
        </div>
      </div>
    </Layout>
  );
}

export default index;
