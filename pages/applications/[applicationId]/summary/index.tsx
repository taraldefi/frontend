import Select from "@components/Select/Select";
import { PortalIcons } from "@components/icons";
import DashBoardPageLayout from "@components/layouts/dashboard_page_layout";
function Summary() {
  return (
    <div className="summaryMain">
      <DashBoardPageLayout
        sortBarData={[]}
        showexport={true}
        exporter={""}
        importer={""}
        date={""}
      >
        <div className="summaryBody">
          <div className="inputBox">
            <div className="business">
              <span>BUSINESS SIDES</span>
              <span>Exporter</span>
              <input
                className="inputs"
                type="text"
                placeholder="Exporter name..."
              ></input>
              <span>Importer</span>
              <input
                className="inputs"
                type="text"
                placeholder="importer name..."
              ></input>
            </div>
            <div className="transaction">
              <span>TRANSACTION DETAILS</span>
              <span>Transaction</span>
              <input
                type="text"
                id="dollar"
                className="inputs"
                placeholder="Transaction amount..."
              ></input>
              <span>Interest</span>

              <input
                id="percentage"
                type="text"
                className="inputs"
                placeholder="Percentage..."
              ></input>
              <span>Downpayment</span>

              <input
                type="text"
                id="dollar"
                className="inputs"
                placeholder="Deposit amount..."
              ></input>
              <span>Term</span>
              <input
                id="calendar"
                type="date"
                className="inputs"
                placeholder="select date..."
              ></input>
              <span>Repayment Profile</span>
              <Select category={"repayment"} />
            </div>
            <div className="info">
              <span>INFO</span>
              <span>Industry</span>
              <Select category={"repayment"} />
              <span>Goods</span>
              <select>
                <option value="" disabled selected hidden>
                  Goods type...
                </option>
                <option>option</option>
                <option>option</option>
              </select>
              <span>Delivery date</span>
              <input
                id="calendar"
                type="date"
                className="inputs"
                placeholder="Select date..."
              ></input>
              <span>Country</span>
              <select>
                <option value="" disabled selected hidden>
                  Select Country...
                </option>
                <option>option</option>
                <option>option</option>
              </select>
            </div>

            <div className="contract">
              <span>CONTRACT STATUS</span>
              <div className="header">
                <PortalIcons icon="checkBox" selected={false} />
                <span>Contract Signed</span>
              </div>
            </div>
          </div>
        </div>
      </DashBoardPageLayout>
    </div>
  );
}

export default Summary;
