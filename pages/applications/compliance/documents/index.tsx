import React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ComplianceLayout from "@components/layouts/compliance_layout";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
function Company() {
  const [files, setFiles] = React.useState([]);

  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };
  return (
    <ComplianceLayout showexport={true}>
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
    </ComplianceLayout>
  );
}

export default Company;
