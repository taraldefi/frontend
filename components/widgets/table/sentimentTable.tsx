import React from "react";
import Image from "next/image";
import SecondButton from "../buttonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { sentimentsTableDataType } from "types/widget_table";
interface Props {
  TableData: sentimentsTableDataType[];
  value: number;
}
export const SentimentsTable = ({ TableData, value }: Props) => {
  return (
    <div className="sentimentsTable">
      <div className="taskBox">
        <span>({value}) PERSONS</span>
      </div>
      <div className={"tablePersons"}>
        <div className="tableTitles">
          <div className="statusTitle">
            {["Persons", "Hit", "Source", "Options"].map((item, index) => {
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
            <div className="tableContent" key={index}>
              <div className="personsContainer" id="assignee">
                <span>{item.person}</span>
              </div>
              <div className="hitContainer">
                <span>{item.hit}</span>
              </div>
              <a href={item.source} className="sourceContainer">
                {item.source}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>

              <div className="OptionsContainer">
                <FontAwesomeIcon icon={faEllipsis} className="iconx" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
