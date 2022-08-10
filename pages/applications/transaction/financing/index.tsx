import TxLayout from "@components/layouts/tx_layout";
import { TxFinanceTable } from "@components/widgets/table/txFinanceTable";
import { TableData } from "./data";
export default function Transactionfinancing() {
  return (
    <TxLayout>
      <div className="financing">
        <span>OPTIONS</span>
        <div className="financingContainer">
          <div className="inputFields">
            <div className="currency">
              <div>
                <label>Currency</label>
                <input className="inputs" type="text" placeholder="Euros" />
              </div>
              <div>
                <label>ECA Cover Premium</label>
                <input className="inputs" type="text" placeholder="$10.000" />
              </div>
            </div>
            <div className="eca">
              <div>
                <label>ECA Cover </label>
                <input className="inputs" type="text" placeholder="2%" />
              </div>
              <div>
                <label>ECA Cover Type</label>
                <input
                  className="inputs"
                  type="text"
                  placeholder="Buyer Credit"
                />
              </div>
            </div>
          </div>
          <div className="notesContainer">
            <label>Additional financing notes:</label>
            <textarea className="inputs" placeholder="Notes..."></textarea>
          </div>
        </div>
        <div className="tableContainer">
          <span>TIME LINE</span>
          {/* <TxFinanceTable TableData={TableData}></TxFinanceTable> */}
        </div>
      </div>
    </TxLayout>
  );
}
