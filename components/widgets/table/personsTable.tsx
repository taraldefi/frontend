import React from "react";
import Image from "next/image";
import { tableFormPerson } from "types/form";
import SecondButton from "../buttonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
interface Props {
  TableData: tableFormPerson[];
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
                  src="/assets/images/18.png"
                  key={index}
                  alt=""
                  width="35%"
                  height="35%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="emailContainer">
                <span>{item.email}</span>
              </div>
              <div className="positionContainer" id="assignor">
                <span>{item.position}</span>
              </div>
              <div className="sv">
                {item.isSent ? (
                  <div className="sent">Sent</div>
                ) : (
                  <div className="notSent">Not Sent</div>
                )}
              </div>
              <div className="vs">
                {item.isDone ? (
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
