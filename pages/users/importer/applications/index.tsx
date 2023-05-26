import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import { ApplicationTable } from "@taraldefi/tariala-component-library";
import TableData from "./data";
function Index() {
  return (
    <NewLayoutNM>
      <div className="application--wrapper">
        <ApplicationTable applicationTableData={TableData}></ApplicationTable>
      </div>
    </NewLayoutNM>
  );
}

export default Index;
