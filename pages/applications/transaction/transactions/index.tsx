import TxLayout from "@components/layouts/tx_layout";
export default function Transactiontx() {
  return (
    <TxLayout>
      <div className="transactionsContainer">
        <div className="companyDetails">
          <span>COMPANY DETAILS</span>
          <span>Company Name</span>
          <input
            type="text"
            className="inputs"
            placeholder="Company Name..."
          ></input>
          <input
            type="text"
            className="inputs"
            placeholder="Industry description..."
          ></input>
        </div>
      </div>
      <div className="goodsAndServices">
        
      </div>
    </TxLayout>
  );
}
