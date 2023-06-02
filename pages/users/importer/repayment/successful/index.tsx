import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import {
  ApplicationTable,
  PaymentSuccessCard,
  ReceiptTable,
} from "@taraldefi/tariala-component-library";
import { ArrowLeft } from "react-feather";

import Layout from "@components/layouts/layout";
import { ReceiptTableData } from "bin/mockData";
import Topbar from "@components/topBar";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <Topbar></Topbar>

      <div className="paymentSuccessContainer">
        <PaymentSuccessCard
          onPrint={() => {}}
          onBack={() => {
            router.back();
          }}
          paymentDetails={{
            date: "March 19, 2023",
            method: "USD-Stablecoin",
            amount: 2000,
          }}
        />
      </div>
    </div>
  );
}

export default Index;
