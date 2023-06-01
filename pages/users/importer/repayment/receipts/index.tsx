import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import {
  ApplicationTable,
  ReceiptTable,
} from "@taraldefi/tariala-component-library";

import Layout from "@components/layouts/layout";
import { ReceiptTableData } from "bin/mockData";
function Index() {
  return (
    <Layout>
      <div>Receipts</div>
      <div className="viewbody">
        <div style={{ padding: "10%", width: "100%" }}>
          <ReceiptTable receiptTableData={ReceiptTableData} />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
