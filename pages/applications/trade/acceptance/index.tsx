import ReportLayout from "@components/layouts/cover_layout";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
import React from "react";

const SortbarData = [
  {
    id: 1,
    title: "Contract",
    path: "/applications/trade/contract",
  },
  {
    id: 2,
    title: "Shipping Documents",
    path: "/applications/trade/shipping",
  },
  {
    id: 3,
    title: "Acceptance Certificates",
    path: "/applications/trade/acceptance",
  },
  {
    id: 4,
    title: "Other Documents",
    path: "/applications/trade/other",
  },
];
export default function Acceptance() {
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
