import React from "react";
import Image from "next/image";
import { personsDataType, taskTableDataType } from "types/widget_table";
import SecondButton from "../buttonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
interface Props {
  TableData: personsDataType[];
  value: number;
}
export const PersonsTable = ({ TableData, value }: Props) => {
  return (
    <>
      <div className="taskBox">
        <span>({value}) Persons</span>
      </div>
      <div className={"tablePersons"}>
        <div className="tableTitles">
          <div className="statusTitle">
            {[
              "Persons",
              "Email",
              "Position",
              "Verification Status",
              "Status Verification",
              "Options",
            ].map((item, index) => {
              return (
                <div key={index} className="statusTitleItems">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {TableData.map((item, index) => {
          return (
            <div className="tabelContent" key={index}>
              <div className="personsContainer" id="assignee">
                <Image
                  className="images"
                  src={item.Persons.user}
                  key={index}
                  alt=""
                  width="35%"
                  height="35%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.Persons.name}</span>
                </div>
              </div>
              <div className="emailContainer">
                <span>{item.Email}</span>
              </div>
              <div className="positionContainer" id="assignor">
                <span>{item.Position}</span>
              </div>
              <div className="sv">
                {item.StatusVerificatoin ? (
                  <div className="sent">Sent</div>
                ) : (
                  <div className="notSent">Not Sent</div>
                )}
              </div>
              <div className="vs">
                {item.VerificationStatus ? (
                  <div className="notDone">Completed</div>
                ) : (
                  <div className="complete">Not Done</div>
                )}
              </div>
              <div className="OptionsContainer">
                <FontAwesomeIcon icon={faEllipsis} className="iconx" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
