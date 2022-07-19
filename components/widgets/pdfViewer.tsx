import React from "react";
import ReactDOM from "react-dom";
import { Viewer } from "@react-pdf-viewer/core";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  fileName: string;
  fileUrl: string;
  shown: any;
  setShown: any;
}

const Modal: React.FC<ModalProps> = ({
  fileName,
  fileUrl,
  shown,
  setShown,
}) => {
  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  const modalBody = () => (
    <div className="pdfviewer_header">
      <div className="header">
        <div className="text">{fileName}</div>
        <div className="zoom_container">
          <div>
            <ZoomOut>
              {(props: RenderZoomOutProps) => (
                <div>
                  <FontAwesomeIcon
                    size="2x"
                    color="#0d8489"
                    onClick={props.onClick}
                    icon={faCircleMinus}
                  />
                </div>
              )}
            </ZoomOut>
          </div>
          <div>
            <CurrentScale>
              {(props: RenderCurrentScaleProps) => (
                <span className="text">{`${Math.round(
                  props.scale * 100
                )}%`}</span>
              )}
            </CurrentScale>
          </div>
          <div>
            <ZoomIn>
              {(props: RenderZoomInProps) => (
                <FontAwesomeIcon
                  size="2x"
                  color="#0d8489"
                  onClick={props.onClick}
                  icon={faCirclePlus}
                />
              )}
            </ZoomIn>
          </div>
        </div>
        <div>
          <Button title={"Close"} onClick={() => setShown(false)} />
        </div>
      </div>
      <Viewer
        plugins={[zoomPluginInstance]}
        defaultScale={1}
        fileUrl={fileUrl}
      />
    </div>
  );

  return <>{shown && ReactDOM.createPortal(modalBody(), document.body)}</>;
};

export default Modal;
