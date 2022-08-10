import React from "react";
import { TableVal } from "types/widget_table";
interface Props {
  TableData: TableVal;
}
export const TxFinanceTable = ({ TableData }: Props) => {
  console.log(TableData);
  return (
    <div className="txFinance">
      <div className="tableTitles">
        <div className="statusTitle">
          {[
            "Time",
            "Order Entry",
            "Shipment",
            "Month 3",
            "Month 6",
            "Month 9",
            "Month 12",
            "Month 15",
            "Month 18",
          ].map((item, index) => {
            return (
              <div key={index} className="statusTitleItems">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
