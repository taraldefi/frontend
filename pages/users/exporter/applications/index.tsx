import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import { ApplicationTable } from "@taraldefi/tariala-component-library";

const TableData = [
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "SX-936",
    importerName: "Ullrich Weigel OH GmbH",
    status: "Pending",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "SX-936",
    importerName: "Ullrich Weigel OH GmbH",
    status: "Pending",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "SX-936",
    importerName: "Ullrich Weigel OH GmbH",
    status: "Pending",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "SX-936",
    importerName: "Ullrich Weigel OH GmbH",
    status: "Pending",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
  {
    applicationId: 262116,
    product: "Product Title",
    dateFrom: "12.01.2022",
    dateTo: "12.02.2022",
    importerId: "FH-509",
    importerName: "Lohmann Kuhn AG",
    status: "Reviewing",
  },
];
export default function Index() {
  return (
    <NewLayoutNM>
      <div className="application--wrapper">
        <ApplicationTable applicationTableData={TableData} />
      </div>
      {/* <ApplicaitonTable TableData={TableData}></ApplicaitonTable> */}
    </NewLayoutNM>
  );
}
