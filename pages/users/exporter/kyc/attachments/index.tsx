import KYCLayout from "@components/layouts/kycLayout";
import Layout from "@components/layouts/layout";
import FileUpload from "@components/widgets/FileUpload";
import React from "react";

function index() {
  return (
    <KYCLayout>
      <div className="kycContainer">
        <FileUpload></FileUpload>
      </div>
    </KYCLayout>
  );
}

export default index;
