import React from "react";
import ProgressBar from "@components/widgets/progressBar";
import Image from "next/image";
import { taskTableDataType } from "types/widget_table";
import StatusWidget from "../statusWidget";
import SecondButton from "../buttonSecondary";
interface Props {
  TableData: taskTableDataType[];
  value: number;
}
export const TaskTable = ({ TableData, value }: Props) => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <>
      <div className="taskBox">
        <span>TASKS ({value})</span>
        <SecondButton
          title="View All Tasks"
          onClick={() => setToggle(!toggle)}
        ></SecondButton>
      </div>
      <div className={"tableTask " + (toggle && "active")}>
        <div className="tableTitles">
          <div className="statusTitle">
            {["Assignee", "Task", "Assignor", "Date"].map((item, index) => {
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
            <div className="tableContent" key={index}>
              <div className="assigneeContainer" id="assignee">
                <Image
                  className="images"
                  src={item.assignee.user}
                  key={index}
                  alt=""
                  width="35%"
                  height="35%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.assignee.name}</span>
                </div>
              </div>
              <div className="taskList">
                <span>{item.task.title}</span>
                <span>{item.task.description}</span>
              </div>
              <div className="assigneeContainer" id="assignor">
                <Image
                  className="images"
                  src={item.assignor.user}
                  key={index}
                  alt=""
                  width="35%"
                  height="35%"
                ></Image>
                <div className="nameContainer">
                  <span>{item.assignor.name}</span>
                </div>
              </div>
              <div className="date">{item.date}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
