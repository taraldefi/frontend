import React from "react";
import axios from "axios";
import { Button } from "@icodex-az/tariala-component-library";
import { PortalIcons } from "@components/icons";

const FileUpload = ({ files, setFiles, removeFile }: any) => {
  const uploadHandler = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    file.url = URL.createObjectURL(file);
    setFiles([...files, file]);

    // upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);
    axios
      .post("http://localhost:8080/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" accept=".pdf" onChange={uploadHandler} />
          <Button
            backgroundColor="#1ab98b"
            primary={true}
            label={"Upload"}
            icon={<PortalIcons selected={false} icon={"upload"}></PortalIcons>}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
