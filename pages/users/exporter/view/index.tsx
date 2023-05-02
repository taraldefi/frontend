import EntityView from "@components/entity/entityView";
import Layout from "@components/layouts/layout";
import React from "react";
import { EntityTable } from "@icodex-az/tariala-component-library";
import { TableData } from "./data";
import DeleteModal from "@components/modal/deleteModal";
import FormEditModal from "@components/modal/entityEditFormModal";
import { useModal } from "@hooks/useModal";
import { DeleteModalAtom, EditFormModalAtom } from "store/ModalStore";

function Index() {
  const deleteModal = useModal(DeleteModalAtom);
  const editModal = useModal(EditFormModalAtom);

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
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => deleteModal.close()}
      ></DeleteModal>
      <FormEditModal
        isOpen={editModal.isOpen}
        onClose={() => editModal.close()}
      ></FormEditModal>
    </Layout>
  );
}

export default Index;
