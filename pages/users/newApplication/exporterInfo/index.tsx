import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function Index() {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");
  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);
  console.log({ selectedRadioBtn });
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
              <span>Please provide a contact telephone number</span>
              <input
                type="text"
                className="inputs"
                placeholder="Contact number..."
              />
            </div>
            <div>
              <span>Company address</span>
              <input
                type="text"
                className="inputs"
                placeholder="Address line 1..."
              />
            </div>
            <div>
              <span>Company address line 2</span>
              <input
                type="text"
                className="inputs"
                placeholder="Address line 2..."
              />
            </div>
            <div className="splitBox">
              <div>
                <span>Company Post Code</span>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Post code..."
                />
              </div>
              <div>
                <span>Employees count</span>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Empoyees count..."
                />
              </div>
            </div>
            <div>
              <span>Country of Registration</span>
              <select className="inputs">
                <option value="">Select country...</option>
                <option value=""></option>
              </select>
            </div>
            <div className="countriesBox">
              <span>Main countries of business 1</span>
              <select className="inputs">
                <option value="">Select country...</option>
                <option value=""></option>
              </select>
            </div>
            <div>
              <span>Date company registered</span>
              <input type="date" className="inputs" id="calendar" />
            </div>
          </div>
          <div className="vLine"></div>
          <div className="taxAndRevenue">
            <div className="maintitle">TAX AND REVENUE</div>
            <div>
              <span>Tax Identification Number</span>
              <input
                type="text"
                className="inputs"
                placeholder="Tax number..."
              />
            </div>
            <div>
              <span>Date of the last fiscal year</span>
              <input type="date" className="inputs" id="calendar" />
            </div>
            <div>
              <span>Total revenue last fiscal year? (SR)(SR)</span>
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
                id="percentage"
                className="inputs"
                placeholder="Revenue percentage..."
              />
            </div>
            <div>
              <span>Export value in SR in thousand last two years</span>
              <input
                type="text"
                className="inputs"
                placeholder="Export value..."
              />
            </div>
            <div className="radioBack">
              <span>Are the financials audited or produced in-house?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    id="Audited"
                    name="financials"
                    value="Audited"
                  />
                  <label htmlFor="Audited">Audited</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="In-house"
                    name="financials"
                    value="In-house"
                  />
                  <label htmlFor="In-house">In-house</label>
                </div>
              </div>
            </div>
            <div>
              <span>Where will the goods be produced?</span>
              <select className="inputs">
                <option value="">Select factory location...</option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="otherInfo">
            <div className="maintitle">OTHER INFO</div>
            <div>
              <span>How many year of export experience do you have?</span>
              <select className="inputs">
                <option value="">Select years...</option>
                <option value=""></option>
              </select>
            </div>
            <div className="radioBack">
              <span>Have you previously used ECA cover?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    id="ECACoverYes"
                    name="otherInfoRadio"
                    value="Yes"
                    checked={isRadioSelected("Yes")}
                    onChange={handleRadioClick}
                  />
                  <label htmlFor="ECACoverYes">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="ECACoverNO"
                    name="otherInfoRadio"
                    value="No"
                    checked={isRadioSelected("No")}
                    onChange={handleRadioClick}
                  />
                  <label htmlFor="ECACoverNO">No</label>
                </div>
              </div>
            </div>
            {selectedRadioBtn == "Yes" ? (
              <div className="radioBack">
                <span>Is an external credit rating available?</span>
                <div>
                  <div>
                    <input
                      type="radio"
                      id="creaditRatingYes"
                      name="creditRatingRadio"
                      value="Yes"
                    />
                    <label htmlFor="creaditRatingYes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="creaditRatingNo"
                      name="creditRatingRadio"
                      value="No"
                    />
                    <label htmlFor="In-creaditRatingNo">No</label>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </ApplicationLayout>
    </div>
  );
}

export default Index;
