import React from "react";
import ProgressBar from "@components/widgets/progressBar";
import Image from "next/image";
import { teamTableDataType } from "types/widget_table";
import StatusWidget from "../statusWidget";
import SecondButton from "../buttonSecondary";
interface Props {
  TableData: teamTableDataType[];
  value: number;
}
export const TeamTable = ({ TableData, value }: Props) => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
      <div className="taskBox">
        <span>TASKS ({value})</span>
        <SecondButton
          title="View All Members"
          onClick={() => setToggle(!toggle)}
        ></SecondButton>
      </div>
      <div className={"tableTeams " + (toggle && "active")}>
        <div className="tableTitles">
          <div className="statusTitle">
            {["Member", "Department", "Last Action", "Date of action"].map(
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
            <div className="tabelContent" key={index}>
              <div className="memberContainer" id="member">
                <Image
                  className="images"
                  src={item.member.user}
                  key={index}
                  alt=""
                  width="35%"
                  height="35%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.member.name}</span>
                </div>
              </div>
              <div className="department">{item.department}</div>
              <div className="lastaction">{item.lastAction}</div>
              <div className="date">{item.dateOfAction}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
