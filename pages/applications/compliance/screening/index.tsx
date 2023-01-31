import React, { useState } from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import { ScreeningTable } from "@components/widgets/table/screeningTable";
import { TableData } from "./data";
import ButtonIcon from "@components/widgets/buttonWithIcon";
import { tableFormScreening } from "types/form";
import { useForm } from "react-hook-form";
function Company() {
  var x: number = Object.keys(TableData).length;
  const [fields, setFields] = useState<tableFormScreening[]>(TableData);
  const { register, handleSubmit, reset } = useForm<tableFormScreening>();
  const onSubmit = handleSubmit((data) => {
    setFields([data!, ...fields]);
    reset();
  });
  return (
    <ComplianceLayout showexport={true}>
      <div className="personsTable">
        <div className="persons">
          <span className="title">ADD NEW</span>
          <form onSubmit={onSubmit} action="" className="complianceAddBox">
            <div className="name">
              <span>Person</span>
              <input
                {...register("persons")}
                placeholder="Name..."
                type="text"
                className="inputs"
              />
            </div>
            <div className="hit">
              <span>Hit</span>
              <input
                {...register("Hit")}
                placeholder="Hit..."
                type="text"
                className="inputs"
              ></input>
            </div>
            <div className="position">
              <span>Source</span>
              <input
                {...register("Source")}
                placeholder="Add link..."
                type="text"
                className="inputs"
              ></input>
            </div>

            <div className="buttonContainer">
              <ButtonIcon icon="add" title="Add"></ButtonIcon>
            </div>
          </form>
        </div>
      </div>

      <ScreeningTable TableData={fields}></ScreeningTable>
    </ComplianceLayout>
  );
}

export default Company;
