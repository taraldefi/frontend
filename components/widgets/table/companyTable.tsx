import React from "react";
import { companyTableDataType } from "types/widget_table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";

interface Props {
  TableData: companyTableDataType[];
}
export const CompanyTable = ({ TableData }: Props) => {
  return (
    <>
      <div className="title">BUSINESS DETAILS</div>
      <div className="tableCompliance">
        <div className="tableTitles">
          <div className="statusTitle">
            {["Persons", "Details", "Source", "Status"].map((item, index) => {
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
              <div className="detailsTab">{item.details}</div>
              <a href={item.source} className="sourceTab">
                {item.source}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
              <div className="statusTab">
                {item.status ? (
                  <div className="svgIcon">
                    <PortalIcons selected={true} icon={"compliance"} />
                    <span className="selected">Verified</span>
                  </div>
                ) : (
                  <div className="svgIcon">
                    <PortalIcons selected={false} icon={"unchecked"} />
                    <span className="notSelected">Verified</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
