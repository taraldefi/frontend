import React from "react";
import { quantitativeTableDataType } from "types/widget_table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PortalIcons } from "@components/icons";
import { MetricRange } from "@taraldefi/tariala-component-library";
import { StatusWidget } from "@taraldefi/tariala-component-library";

interface Props {
  TableData: quantitativeTableDataType[];
}
export const QuantitativeTable = ({ TableData }: Props) => {
  return (
    <div className="rating">
      <div className="title">FACTORS</div>
      <div className="tableQuantitative">
        <div className="tableTitles">
          <div className="statusTitle">
            {["Factor", "Value", "Status", "Metric"].map((item, index) => {
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
              <div className="factorTab">{item.factor}</div>
              <div className="valueTab">{item.value}</div>

              <div className="statusTab">
                {item.status ? (
                  <StatusWidget
                    type={"Up"}
                    icon={<PortalIcons selected={false} icon={"up"} />}
                    showIcon={true}
                  ></StatusWidget>
                ) : (
                  <StatusWidget
                    type={"Down"}
                    icon={<PortalIcons selected={false} icon={"down"} />}
                    showIcon={true}
                  ></StatusWidget>
                )}
              </div>

              <div className="metricTab">
                <MetricRange value={item.metric}></MetricRange>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
