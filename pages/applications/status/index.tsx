import React from "react";
import DashBoardLayout from "@components/dashboardlayout";
import Table from "@components/table";
function Status() {
  return (
    <>
      <DashBoardLayout>
        <div className="rightContent">
          <div className="titleBox">[Exporter] - [Importer] - [Date]</div>
          <Table />
        </div>
      </DashBoardLayout>
    </>
  );
}

export default Status;
