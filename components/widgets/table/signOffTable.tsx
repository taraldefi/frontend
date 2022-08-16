import React from "react";
import ProgressBar from "@components/widgets/progressBar";
import Image from "next/image";
import { signOffTableType } from "types/widget_table";
import StatusWidget from "../statusWidget";
import { PortalIcons } from "@components/icons";
interface Props {
  TableData: signOffTableType[];
}
export const SignOffTable = ({ TableData }: Props) => {
  return (
    <div className="tableSignOff">
      <div className="tableTitles">
        <div className="statusTitle">
          {["Name", "Position", "Status", "Status"].map((item, index) => {
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
            <div className="processTab">{item.position}</div>

            <div className="status">
              {" "}
              {item.status1 ? (
                <>
                  <PortalIcons selected={true} icon={"compliance"} />
                  <span className="selected">Seen</span>
                </>
              ) : (
                <>
                  <PortalIcons selected={false} icon={"unchecked"} />
                  <span className="notSelected">Seen</span>
                </>
              )}
            </div>

            <div className="status">
              {" "}
              {item.status2 ? (
                <>
                  <PortalIcons selected={true} icon={"compliance"} />
                  <span className="selected">Signed</span>
                </>
              ) : (
                <>
                  <PortalIcons selected={false} icon={"unchecked"} />
                  <span className="notSelected">Signed</span>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
