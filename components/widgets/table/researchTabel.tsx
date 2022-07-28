import React from "react";
import { researchTableDataType } from "types/widget_table";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../buttonWithIcon";

interface Props {
  TableData: researchTableDataType[];
}
export const ResearchTable = ({ TableData }: Props) => {
  return (
    <>
      <div className="researchTitle">
        OUTLETS
      </div>
      <div className="tabelResearch">
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
            <div className="tabelContent" key={index}>
              <div className="personsContainer" id="assignee">
                <Image
                  className="images"
                  src="/assets/images/18.png"
                  key={index}
                  alt=""
                  width="25%"
                  height="25%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="hitTab">{item.Hit}</div>
              <a href={item.Source} className="sourceTab">
                {item.Source}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
              <div className="OptionsTab">
                <FontAwesomeIcon icon={faEllipsis} className="iconx" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
