import React from "react";
import {
  companyTableDataType,
  screeningTableDataType,
} from "types/widget_table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  TableData: screeningTableDataType[];
}
export const ScreeningTable = ({ TableData }: Props) => {
  return (
    <>
      <div className="screeningtitle">OUTLETS</div>
      <div className="tableComplianceScreening">
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
              <div className="personsTab">{item.persons}</div>
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
