import { faEllipsis, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { profitLossTableType } from "types/widget_table";
import SecondButton from "../buttonSecondary";
interface Props {
  TableData: profitLossTableType;
}
export const ProfitTable = ({ TableData }: Props) => {
  return (
    <div className="profitTable">
      <div className="tableJoint">
        <div className="contentBox">
          <div className="tableTitles">
            <div className="statusTitle">
              <div className="statusTitleItems">IN THDS EUR</div>
            </div>
          </div>
          <div className="titleColumn">
            {[
              "Revenue",
              "COGS",
              "Gross Profit",
              "Distribution Costs",
              "Adminstrative Costs",
              "Other Income",
              "Operating Profit",
              "Finance Costs Net",
              "Profit before income tax",
              "Income tax expense",
              "Profit for the period",
            ].map((item, index) => {
              return (
                <div className="columnContent" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="tableContent">
          <div className="rowContent">
            {Object.keys(TableData).map((key, index) => {
              return (
                <div className="columnItems" key={index}>
                  <div className="contentTitle">
                    {Object.keys(TableData)[index]}
                  </div>
                  {Object.keys(TableData[key]).map((item, index) => {
                    return (
                      <div className="items" key={index}>
                        {TableData[key][`${item}`] == "file" ? (
                          <div id="fileButton">
                            {" "}
                            <SecondButton
                              title={"Open File"}
                              onClick={function (): void {
                                throw new Error("Function not implemented.");
                              }}
                            />
                          </div>
                        ) : (
                          <div id="euro">
                            {TableData[key][`${item}`]}
                            <FontAwesomeIcon
                              icon={faEuroSign}
                              className="iconx"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};