import EntityView from "@components/entity/entityView";
import Layout from "@components/layouts/layout";
import { EntityViewTable } from "@components/widgets/table/entityViewTable";
import React from "react";
import { EntityTable } from "@icodex-az/tariala-component-library";
import { TableData } from "./data";

function index() {
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

export default index;
