import ApplicationLayout from "@components/layouts/new_application_layout";
import FileUpload from "@components/widgets/FileUpload";
import React from "react";

function Index() {
  const [files, setFiles] = React.useState([]);

  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };
  return (
    <ApplicationLayout>
      <div className="plContainer">
        <div className="upload_container">
          <div className="fileWraper">
            <FileUpload
              files={files}
              setFiles={setFiles}
              removeFile={removeFile}
            />
            <span>Exporter&apos;s undertaking</span>
          </div>
          <div className="fileWraper">
            <FileUpload
              files={files}
              setFiles={setFiles}
              removeFile={removeFile}
            />
            <span>Please upload the SIMAH consent form.</span>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default Index;
