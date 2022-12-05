import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function Index() {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("Yes");
  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);
  const [selectedRadioBtn1, setSelectedRadioBtn1] = React.useState("No");
  const isRadioSelected1 = (value: string): boolean =>
    selectedRadioBtn1 === value;
  const handleRadioClick1 = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn1(e.currentTarget.value);
  const [valueSelect, setValueSelect] = React.useState("Select country...");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(e.currentTarget.value);
  };
  const [valueSelect1, setValueSelect1] = React.useState("Select country...");
  const handleSelect1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSelect1(e.currentTarget.value);
  };
  const [valueSelect2, setValueSelect2] = React.useState("Select country...");
  const handleSelect2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSelect2(e.currentTarget.value);
  };

  return (
    <div>
      <ApplicationLayout>
        <div className="exporterInfoContainer">
          <div className="generalInfo">
            <div className="maintitle">GENERAL INFO</div>
            <div>
              <span>Supplier&apos;s company name</span>
              <input type="text" className="inputs" placeholder="Company name..." />
            </div>
            <div>
              <span>Phone Number</span>
              <input
                type="text"
                className="inputs"
                placeholder="Contact number..."
              />
            </div>
            <div>
              <span>Address</span>
              <input
                type="text"
                className="inputs"
                placeholder="Address line 1..."
              />
            </div>
            <div>
              <span>Address Line 2</span>
              <input
                type="text"
                className="inputs"
                placeholder="Address line 2..."
              />
            </div>
            <div>
              <span>Company Post Code</span>
              <input
                type="text"
                className="inputs"
                placeholder="Post code..."
              />
            </div>
            <div></div>
          </div>
          <div className="vLine"></div>
          <div className="taxAndRevenue">
            <div className="maintitle">RELATIONSHIP WITH SUPPLIER</div>

            <div className="radioBack">
              <span>Do you have previous payment experience with the Supplier?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    id="Audited"
                    name="financials"
                    value="Audited"
                  />
                  <label htmlFor="Audited">YES</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="In-house"
                    name="financials"
                    value="In-house"
                  />
                  <label htmlFor="In-house">NO</label>
                </div>
              </div>
            </div>
            <div>
              <span>Describe your previous payment experience.</span>
              <input className="inputs" id="greyed" placeholder="Desciption..."/>
            </div>
            <div>
              <span>Length of payment experience</span>
              <input className="inputs" id="greyed" placeholder="Payment length..."/>
            </div>
            <div>
              <span>Number of deals</span>
              <input className="inputs" id="greyed" placeholder="Number of deals..."/>
            </div>
            <div>
              <span>Average volume of business with your customer</span>
              <input className="inputs" id="greyed" placeholder="Business volume..."/>
            </div>
            <div >
              <span>Payment history with Supplier</span>
              <select className="inputs" id="greyed">
                <option value="">Select type...</option>
              </select>
            </div>
          </div>
          
          <div className="otherInfo">

          </div>
        </div>
      </ApplicationLayout>
    </div>
  );
}

export default Index;
