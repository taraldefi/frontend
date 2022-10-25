import React from "react";
import { applicationTableType } from "types/widget_table";
interface Props {
  TableData: applicationTableType[];
}
export const ApplicaitonTable = ({ TableData }: Props) => {
  return (
    <div className="ApplicationTable">
      <div className="titleRow">
        {[
          "Application ID",
          "Product",
          "Date From",
          "Date To",
          "Importer ID",
          "Importer Name",
          "Status",
        ].map((item, index) => {
          return (
            <div key={index} className="titleHeadder">
              {item}
            </div>
          );
        })}
      </div>
      {TableData.map((item, index) => {
        return (
          <div key={index} className="tableContent">
            <div className="appTableItems">{item.applicationId}</div>
            <div className="appTableItems">{item.product}</div>
            <div className="appTableItems">{item.dateFrom}</div>
            <div className="appTableItems">{item.dateTo}</div>
            <div className="appTableItems">{item.importerId}</div>
            <div className="appTableItems">{item.importerName}</div>
            <div className="appTableItems">{item.status}</div>
          </div>
        );
      })}
    </div>
  );
};
