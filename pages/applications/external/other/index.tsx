import ReportLayout from "@components/layouts/cover_layout";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
import React from "react";

const SortbarData = [
  {
    id: 1,
    title: "Credit Reports",
    path: "/applications/external/credit",
  },
  {
    id: 2,
    title: "Environment & social",
    path: "/applications/external/social",
  },
  {
    id: 3,
    title: "Other Reports",
    path: "/applications/external/other",
  },
];

export default function Other() {
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
