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
    <div className="tableAudit">
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
                width="35%"
                height="35%"
              ></Image>
              <div className="nameContainer">
                <span>{item.user.name}</span>
                <span>{item.user.email}</span>
              </div>
            </div>

            <div className="activity">
              <StatusWidget type={item.activity}></StatusWidget>
            </div>

            <div className="date">{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};