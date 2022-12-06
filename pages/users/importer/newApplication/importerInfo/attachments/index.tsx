import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
function Index() {
  const [files, setFiles] = React.useState([]);
  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };
  return (
    <ApplicationLayout>
      <div className="impInfoContainer">
        <div className="atachContainer">
          <div className="upload_container">
            <div className="fileWraper">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
              <span>List of shareholders</span>
            </div>
            <div className="fileWraper">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
              <span>Articles of association</span>
            </div>
            <div className="fileWraper">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
              <span>Interim financial report</span>
            </div>
            <div className="fileWraper">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
              <span>Credit report importer</span>
            </div>
            <div className="fileWraper">
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
              <span>Commercial register report</span>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default Index;
