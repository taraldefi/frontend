import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
function External() {
  return (
    <>
      <DashBoardLayout>
        <div className="rightContent">
          <div className="dummy">external page</div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default External;
