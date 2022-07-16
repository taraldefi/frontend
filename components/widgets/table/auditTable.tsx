import React from "react";
import ProgressBar from "@components/widgets/progressBar";
import Image from "next/image";
import { auditTableDataType } from "types/widget_table";
import StatusWidget from "../statusWidget";
interface Props {
  TableData: auditTableDataType[];
}
export const AuditTable = ({ TableData }: Props) => {
  return (
    <div className="table">
      <div className="tableTitles">
        <div className="statusTitle">
          {["Action", "User", "Activity", "Date"].map((item, index) => {
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
            <div className="processTab">{item.action}</div>
            <div className="imageContainer">
              <Image
                className="images"
                src={item.user.avatar}
                key={index}
                alt=""
                width="32%"
                height="32%"
              ></Image>
            </div>

            <StatusWidget type={item.activity}></StatusWidget>

            <div className="date">{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};
