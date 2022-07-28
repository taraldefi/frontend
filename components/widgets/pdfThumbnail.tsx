import React from "react";
import { Worker } from "@react-pdf-viewer/core";
interface Props {
  fileUrl: string;
  config: {
    name: string;
  };
}
export const DisplayThumbnail = ({ fileUrl, config }: Props) => {
  return (
    <>
      <object className="object" data={fileUrl} type="application/pdf"></object>
    </>
  );
};
