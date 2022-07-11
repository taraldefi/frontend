import StatusLayout from "@components/layouts/status_layout";
import { AuditTable } from "@components/widgets/table/auditTable";
import { TableData } from "./audit_data";
export default function Audit() {
  return (
    <StatusLayout>
      <AuditTable TableData={TableData} />
    </StatusLayout>
  );
}
