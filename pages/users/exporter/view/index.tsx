import EntityView from "@components/entity/entityView";
import Layout from "@components/layouts/layout";
import React from "react";
import { EntityTable } from "@taraldefi/tariala-component-library";
import { TableData } from "./data";

function Index() {
  return (
    <Layout>
      <div className="viewbody">
        <div className="viewContainer">
          <EntityView
            infoData={{
              BeneficialOwner: "John Smith",
              CodeAbbreviation: "55-NB",
              Nationality: "German",
              HeadquartersLocation: "Berlin",
              IndustryType: "Information Technology",
              CoreBusiness: "Software Development",
              IncorporationDate: "July 2012",
              LegalForm: "Limited",
            }}
          />
        </div>
        <div className="viewTableContainer">
          <span>Products</span>
          <EntityTable entityTableData={TableData} />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
