import React from "react";
import ReactDOM from "react-dom";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface ModalProps {
  fileUrl: string;
  shown: any;
  setShown: any;
}

const Modal: React.FC<ModalProps> = ({ fileUrl, shown, setShown }) => {
  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",

        /* Fixed position */
        left: 0,
        position: "fixed",
        top: 0,

        /* Take full size */
        height: "100%",
        width: "100%",

        /* Displayed on top of other elements */
        zIndex: 9999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        <div style={{ marginRight: "auto" }}>sample-file-name.pdf</div>
        <button
          style={{
            backgroundColor: "#357edd",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>
      <div
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Viewer fileUrl={fileUrl} />
      </div>
    </div>
  );

  return <>{shown && ReactDOM.createPortal(modalBody(), document.body)}</>;
};

export default Modal;
