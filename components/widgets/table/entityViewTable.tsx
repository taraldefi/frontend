import React from "react";
import { entityTableType } from "types/widget_table";
interface Props {
  TableData: entityTableType[];
}
export const EntityViewTable = ({ TableData }: Props) => {
  return (
    <div className="tableentity">
      <div className="tableTitles">
        <div className="statusTitle">
          {["Title", "Issuance Date", "Maturity Date", "Facility Amount"].map(
            (item, index) => {
              return (
                <div key={index} className="statusTitleItems">
                  {item}
                </div>
              );
            }
          )}
        </div>
      </div>
      {TableData.map((item, index) => {
        return (
          <div className="tableContent" key={index}>
            <div className="personsTab">{item.productTitle}</div>
            <div className="detailsTab">{item.issuanceDate}</div>
            <div className="sourceTab">{item.maturityDate}</div>
            <div className="statusTab">{item.facilityAmount}</div>
          </div>
        );
      })}
    </div>
  );
};
