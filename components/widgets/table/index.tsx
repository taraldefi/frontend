import React from "react";
import { TableData, TableTitle } from "./data";
import ProgressBar from "@components/widgets/progressbar";
import Image from "next/Image";
const Table = () => {
  return (
    <div className="table">
      <div className="tableTitles">
        {TableTitle.map((item, index) => {
          return (
            <div className="statusTitle" key={index}>
              {TableTitle[index].StatusTitle.map((item, index) => {
                return (
                  <div key={index} className="statusTitleItems">
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {TableData.map((item, index) => {
        return (
          <div className="tabelContent" key={index}>
            <div className="processTab">{item.Process}</div>
            <div className="imageContainer">
              {TableData[index].user.map((item, index) => {
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
              progress={item.Progress}
              color={"#04C1DE"}
              showText={false}
            />
            <div className="tableStatus">{item.Status}</div>
            <div className="date">{item.Date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
