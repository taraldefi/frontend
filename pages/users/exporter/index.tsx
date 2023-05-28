import Layout from "@components/layouts/layout";
import getAxiosConfig from "@config/axiosConfig";
import { Entity } from "@taraldefi/tariala-component-library";
import CoreUtils from "@utils/coreUtils";
import React, { useEffect } from "react";
const data = {
  id: 1,
  image: "/assets/images/entity.png",
  title: "Ullrich Weigel",
  registrationNo: 1,
  products: 25,
  applications: 25,
};

function Index() {
  useEffect(() => {
    // Perform localStorage action
    localStorage.setItem(
      "SITE_DATA_AUTH",
      JSON.stringify({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwOi8vbG9jYWxob3N0Ojc3NzciLCJhdWRpZW5jZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsInN1YmplY3QiOiIzIiwiaXNUd29GQUF1dGhlbnRpY2F0ZWQiOmZhbHNlLCJpYXQiOjE2ODQ5OTYwMTIsImV4cCI6MTY4NDk5NjkxMn0.bIb7suuEKp0lGPazndsv0hHoMBK2oMWAp3fItZxNAbw",
      })
    );
  }, []);

  const auth = getAxiosConfig("GET");
  console.log(auth);

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
