import ApplicationLayout from "@components/layouts/new_application_layout";
import BottomBar from "@components/newApplicationBottom";
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
      <div className="ptContainer">
        <div className="ptItemsContainer">
          <div className="ptDetails">
            <div className="maintitle">TRASACTION DOCS</div>
            <div className="upload_container">
              <FileList files={files} removeFile={removeFile} />
              <FileUpload
                files={files}
                setFiles={setFiles}
                removeFile={removeFile}
              />
            </div>
          </div>
          <div className="vLine"></div>
          <div className="ptInterest">
            <div className="maintitle">INTEREST</div>
          </div>
        </div>
      </div>
      <BottomBar></BottomBar>
    </ApplicationLayout>
  );
}

export default Index;
