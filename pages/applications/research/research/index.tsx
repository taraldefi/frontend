import React, { useState } from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ResearchLayout from "@components/layouts/rs_layout";
import { TableData } from "@pages/applications/research/research/data";
import { ResearchTable } from "@components/widgets/table/researchTabel";
import { useForm } from "react-hook-form";
import { tableFormResearch } from "types/form";
import ButtonIcon from "@components/widgets/buttonWithIcon";
function Research() {
  var x: number = Object.keys(TableData).length;
  const [fields, setFields] = useState<tableFormResearch[]>(TableData);
  const { register, handleSubmit, reset } = useForm<tableFormResearch>();
  const onSubmit = handleSubmit((data) => {
    setFields([data!, ...fields]);
    reset();
  });
  return (
    <>
      <ResearchLayout showexport={true}>
        <div className="personsTable">
          <div className="persons">
            <span className="title">ADD NEW</span>
            <form onSubmit={onSubmit} action="" className="complianceAddBox">
              <div className="name">
                <span>Person</span>
                <input
                  {...register("name")}
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
        <ResearchTable TableData={fields}></ResearchTable>
      </ResearchLayout>
    </>
  );
}

export default Research;
