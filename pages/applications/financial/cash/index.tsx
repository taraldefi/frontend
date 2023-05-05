import FinancialsLayout from "@components/layouts/financials_layout";
import { CashTable } from "@components/widgets/table/cashTable";
import { TableData } from "./data";

export default function Cash() {
  return (
    <FinancialsLayout showexport={true}>
      <CashTable TableData={TableData} />
    </FinancialsLayout>
  );
}
