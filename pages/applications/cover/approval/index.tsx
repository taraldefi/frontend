import ReportLayout from "@components/layouts/cover_layout";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
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
  const [files, setFiles] = React.useState([]);

  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };
  return (
    <ReportLayout documentCount={files.length} sortbarData={SortbarData}>
      <div className="main_container">
        <div className="upload_container">
          <FileList files={files} removeFile={removeFile} />
          <FileUpload
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
          />
        </div>
      </div>
    </ReportLayout>
  );
}
