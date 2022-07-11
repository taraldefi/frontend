import StatusLayout from "@components/layouts/status_layout";
import { OverviewTable } from "@components/widgets/table";
import { TableData } from "./data";
export default function Overview() {
  return (
    <StatusLayout>
      <OverviewTable TableData={TableData} />
    </StatusLayout>
  );
}
