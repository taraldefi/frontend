import FinancialsLayout from "@components/layouts/financials_layout";
import { BalanceTable } from "@components/widgets/table/balanceTable";
import TableData from "./data";

export default function Balance() {
  return (
    <FinancialsLayout showexport={true}>
      <BalanceTable TableData={TableData} />
    </FinancialsLayout>
  );
}
