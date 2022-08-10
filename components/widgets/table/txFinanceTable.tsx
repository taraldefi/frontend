import { faEllipsis,faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { tableVal } from "types/widget_table";
interface Props {
  TableData: tableVal;
}
export const TxFinanceTable = ({ TableData }: Props) => {
  console.log(TableData);
  const keys = Object.keys(TableData);
  return (
    <div className="txFinance">

      <div className="tableJoint">

        <div className="contentBox">
          <div className="tableTitles">
            <div className="statusTitle">
              <div className="statusTitleItems">
                Time
              </div>
            </div>
          </div>
          <div className="titleColumn">
            {["Down Payment", "Principal Repayment", "Interest Repayment", "Total Payment"].map((item, index) => {
              return (
                <div className="columnContent" key={index}>
                  {item}
                </div>
              )
            })}
          </div>
        </div>
        <div className="tableContent">
          <div className="rowContent">
            {
              Object.keys(TableData).map((key, index) => {
                return (
                  <div className="columnItems" key={index}>
                    <div className="contentTitle">
                      {Object.keys(TableData)[index]}
                    </div>
                    {
                      Object.keys(TableData[key]).map((item, index) => {
                        return (
                          <div className="items" key={index}>
                            {TableData[key][`${item}`] == 0 ?  <FontAwesomeIcon icon={faEllipsis} className="iconx"  /> : <div id="euro">{TableData[key][`${item}`]}<FontAwesomeIcon icon={faEuroSign} className="iconx" /></div>}
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
