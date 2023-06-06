import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import { ApplicationTable } from "@taraldefi/tariala-component-library";
import TableData from "./data";
import Layout from "@components/layouts/layout";
function Index() {
  return (
    <Layout>
      <div className="viewbody">
        <div style={{ padding: "10%", width: "100%" }}>
          <ApplicationTable applicationTableData={TableData}></ApplicationTable>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
