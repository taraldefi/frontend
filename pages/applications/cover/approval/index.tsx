import ReportLayout from "@components/layouts/cover_layout";
import FileUpload from "@components/widgets/FileUpload";
import React from "react";

const SortbarData = [
  {
    id: 1,
    title: "Approvals",
    path: "/applications/cover/approval",
  },
  {
    id: 2,
    title: "Shared Information",
    path: "/applications/cover/shared",
  },
];

export default function Approval() {
  return (
    <ReportLayout documentCount={1} sortbarData={SortbarData}>
      <div className="main_container">
        <div className="upload_container">
          <FileUpload />
        </div>
      </div>
    </ReportLayout>
  );
}
