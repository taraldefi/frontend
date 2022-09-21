import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function Index() {
  return (
    <ApplicationLayout>
      <div className="tsNewContainers">
        <div className="tsAddiContainer">
          <div className="respContainer">
            <div className="maintitle">RESPONSIBILITY</div>
          </div>
          <div className="vLine"></div>
          <div className="addiContainer">
            <div className="maintitle">ADDITIONAL INFO</div>
          </div>
          <div className="vLine"></div>
          <div className="certiContainer">
            <div className="maintitle">CERTIFICATE</div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default Index;
