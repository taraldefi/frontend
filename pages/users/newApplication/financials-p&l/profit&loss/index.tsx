import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function index() {
  return (
    <ApplicationLayout>
      <div className="plContainer">
        <div className="assetsContainer">
          <div className="maintitle"></div>
        </div>
        <div className="vLine"></div>
        <div className="currentYear"></div>
        <div className="vLine"></div>
        <div className="prevYear1"></div>
        <div className="vLine"></div>
        <div className="prevYear2"></div>
      </div>
    </ApplicationLayout>
  );
}

export default index;
