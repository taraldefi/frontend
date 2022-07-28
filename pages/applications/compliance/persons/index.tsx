import React, { useState } from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import ButtonIcon from "@components/widgets/buttonWithIcon";
import { TaskTable } from "@components/widgets/table/taskTable";
import { TableData } from "./data";
import { PersonsTable } from "@components/widgets/table/personsTable";
function Company() {
  var x: number = Object.keys(TableData).length;
  const [personFields, setPersonFields] = useState();
  const [fields, setFields] = useState();
  const handleAdd = () => {
    // setFields([setPersonFields, ...fields,]);
    // setPersonFields("")
  };
  return (
    <ComplianceLayout showexport={true}>
      <div className="personsTable">
        <div className="persons">
          <span className="title">ADD NEW</span>
          <div className="complianceAddBox">
            <div className="name">
              <span>Person Name</span>
              <input
                value={personFields}
                placeholder="Name..."
                type="text"
                className="inputs"
                // onChange={(e) => setPersonFields(e.target.value)}
              />
            </div>
            <div className="email">
              <span>Email</span>
              <input
                placeholder="Email..."
                type="email"
                className="inputs"
              ></input>
            </div>
            <div className="position">
              <span>Position</span>
              <input
                placeholder="Position or role..."
                type="text"
                className="inputs"
              ></input>
            </div>
            <div className="verificationStatus">
              <span>Verification status</span>
              <div className="verificationBox">
                <input type="checkBox" className="check"></input>
                <span>Sent</span>
              </div>
            </div>
            <div className="statusVerification">
              <span>Status verification</span>
              <div className="verificationBox">
                <input type="checkBox" className="check"></input>
                <span>Done</span>
              </div>
            </div>
            <div className="buttonContainer">
              <ButtonIcon
                icon="add"
                title="Add"
                onClick={() => {
                  handleAdd;
                }}
              ></ButtonIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
        <PersonsTable TableData={TableData} value={x} />
      </div>
    </ComplianceLayout>
  );
}

export default Company;
