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
              <span>What is your company name?</span>
              <input
                type="text"
                className="inputs"
                placeholder="Company name..."
              />
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
          </div>
          <div className="vLine"></div>
          <div className="taxAndRevenue">
            <div className="maintitle">TAX AND REVENUE</div>
            <div>
              <span>Total revenue last fiscal year?</span>
              <input
                type="text"
                className="inputs"
                placeholder="Revenue amount..."
              />
            </div>
            <div>
              <span>What % of revenue was comprised by exports?</span>
              <input
                type="text"
                className="inputs"
                placeholder="Revenue percentage..."
                id="percentage"
              />
            </div>
          </div>
          <div className="vLine0"></div>
          <div className="otherInfo"></div>
        </div>
      </ApplicationLayout>
    </div>
  );
}

export default Index;
