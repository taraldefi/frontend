import React from "react";
import CRSLayout from "@components/layouts/crs_layout";
import { SortbarData } from "../data";
import { MetricRange } from "@components/widgets/metricWidget";

function Qualitative() {
  return (
    <CRSLayout showexport={true} sortBarData={SortbarData}>
      hi
    </CRSLayout>
  );
}

export default Qualitative;
