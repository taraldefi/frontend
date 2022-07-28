import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ResearchLayout from "@components/layouts/rs_layout";
import ButtonIcon from "@components/widgets/buttonWithIcon";
function Research() {
  return (
    <>
      <ResearchLayout showexport={true} >
        <div className="persons">
          <span className="title">ADD NEW</span>
          <div className="complianceAddBox">
            <div className="name">
              <span>Person Name</span>
              <input
                placeholder="Name..."
                type="text"
                className="inputs"
              />
            </div>
            <div className="email">
              <span>Email</span>
              <input placeholder="Email..." type="email" className="inputs"></input>
            </div>
            <div className="position">
              <span>Position</span>
              <input placeholder="Position or role..." type="text" className="inputs"></input>
            </div>
           
            <div className="buttonContainer">
              <ButtonIcon icon="add" title="Add" onClick={() => { }}></ButtonIcon>
            </div>
          </div>
        </div>
      </ResearchLayout>
    </>
  );
}

export default Research;
