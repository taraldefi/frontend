import React from "react";
import ProgressBar from "@components/widgets/progressBar";
import Image from "next/image";
import { overviewTableDataType } from "types/widget_table";
import { StatusWidget } from "@icodex-az/tariala-component-library";
interface Props {
  TableData: overviewTableDataType[];
}
export const OverviewTable = ({ TableData }: Props) => {
  return (
    <div className="tableOverview">
      <div className="tableTitles">
        <div className="statusTitle">
          {["Process", "Users", "Progress", "Status", "Date"].map(
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
            <div className="processTab">{item.process}</div>
            <div className="imageContainer">
              {TableData[index].users.map((item, index) => {
                return (
                  <Image
                    className="images"
                    src={item}
                    key={index}
                    alt=""
                    width="32%"
                    height="32%"
                  ></Image>
                );
              })}
            </div>
            <ProgressBar
              progress={item.progress}
              color={"#04C1DE"}
              showText={false}
            />
            <StatusWidget type={item.status} showIcon={false}></StatusWidget>
            <div className="date">{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};
