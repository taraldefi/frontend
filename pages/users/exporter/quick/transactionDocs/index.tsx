import ApplicationLayout from "@components/layouts/new_application_layout";
import BottomBar from "@components/newApplicationBottom";
import React from "react";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
import { Button } from "@taraldefi/tariala-component-library";

function Index() {
  const [files, setFiles] = React.useState([]);

  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };
  return (
    <ApplicationLayout>
      <div className="txDocContainer">
        <div className="txDocItemsContainer">
          <div className="txDocDetails">
            <div className="maintitle">TRANSACTION DOCS</div>
            <div className="upload_container">
              <FileList files={files} removeFile={removeFile} />
              <div
                style={{
                  textAlign: "center",
                  gap: "10px",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FileUpload
                  files={files}
                  setFiles={setFiles}
                  removeFile={removeFile}
                />
                <span>Confirmation Document</span>
              </div>

              <div
                style={{
                  textAlign: "center",
                  gap: "10px",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FileUpload
                  files={files}
                  setFiles={setFiles}
                  removeFile={removeFile}
                />
                <span>Additional Documents</span>
              </div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="txDocInterest">
            <div className="maintitle">
              Please upload a copy of the document that proves that the
              transaction was completed successfully.
            </div>
            <div className="maintitle">
              If the transaction is not yet completed, you can skip this step
              for now.
            </div>
            <div className="btnContainer">
              <Button label={"Skip for now"} onClick={() => {}}></Button>
            </div>
          </div>
        </div>
      </div>
      <BottomBar></BottomBar>
    </ApplicationLayout>
  );
}

export default Index;
