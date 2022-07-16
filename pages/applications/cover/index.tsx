import * as React from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import FileUpload from "@components/widgets/FileUpload";
import FileList from "@components/widgets/FileList";
const Cover: React.FC<{}> = () => {
  const [url, setUrl] = React.useState("");
  const [files, setFiles] = React.useState([]);

  const removeFile = (filename: string) => {
    setFiles(files.filter((file: any) => file.name !== filename));
  };

  return (
    <DashBoardLayout>
      <div className="rightContent">
        <div className="upload_container">
          <FileList files={files} removeFile={removeFile} />
          <FileUpload
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
          />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Cover;
