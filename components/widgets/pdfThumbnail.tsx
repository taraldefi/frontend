import * as React from "react";
import { ProgressBar, Viewer } from "@react-pdf-viewer/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { Worker } from "@react-pdf-viewer/core";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { pageThumbnailPlugin } from "./PageThumbnailPlugin";

interface DisplayThumbnailProps {
  fileUrl: string;
  pageIndex: number;
}

const DisplayThumbnail: React.FC<DisplayThumbnailProps> = ({
  fileUrl,
  pageIndex,
}) => {
  const thumbnailPluginInstance = thumbnailPlugin({
    thumbnailWidth: 250,
  });
  const { Cover } = thumbnailPluginInstance;
  const pageThumbnailPluginInstance = pageThumbnailPlugin({
    PageThumbnail: <Cover getPageIndex={() => pageIndex} />,
  });

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer
          fileUrl={fileUrl}
          plugins={[pageThumbnailPluginInstance, thumbnailPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default DisplayThumbnail;
