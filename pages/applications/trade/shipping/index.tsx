import ReportLayout from "@components/layouts/cover_layout";
import FileUpload from "@components/widgets/FileUpload";

const SortbarData = [
  {
    id: 1,
    title: "Contract",
    path: "/applications/trade/contract",
  },
  {
    id: 2,
    title: "Shipping Documents",
    path: "/applications/trade/shipping",
  },
  {
    id: 3,
    title: "Acceptance Certificates",
    path: "/applications/trade/acceptance",
  },
  {
    id: 4,
    title: "Other Documents",
    path: "/applications/trade/other",
  },
];
export default function Shipping() {
  return (
    <ReportLayout documentCount={1} sortbarData={SortbarData}>
      <div className="main_container">
        <div className="upload_container">
          <FileUpload />
        </div>
      </div>
    </ReportLayout>
  );
}
