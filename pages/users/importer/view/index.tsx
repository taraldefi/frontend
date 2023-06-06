import EntityView from "@components/entity/entityView";
import Layout from "@components/layouts/layout";
import {
  Button,
  EntityTable,
  LargeLoanCard,
  SmallLoanCard,
} from "@taraldefi/tariala-component-library";
import React from "react";
import TableData from "./data";

export enum LoanCardTypes {
  INTEREST_RATE = "INTEREST_RATE",
  INTEREST_ACCRUED = "INTEREST_ACCRUED",
  TOTAL_REPAYMENT = "TOTAL_REPAYMENT",
  DUE_DATE = "DUE_DATE",
  LOAN_AMT = "LOAN_AMT",
  OUTSTANDING_AMT = "OUTSTANDING_AMT",
}

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
