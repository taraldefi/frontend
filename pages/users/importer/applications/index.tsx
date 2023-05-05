import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import { ApplicaitonTable } from "@components/widgets/table/applicationTable";
import { TableData } from "./data";
function Index() {
  return (
    <NewLayoutNM>
      <ApplicaitonTable TableData={TableData}></ApplicaitonTable>
    </NewLayoutNM>
  );
}

export default Index;
