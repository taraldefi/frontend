import ApplicationLayout from "@components/layouts/new_application_layout";
import React from "react";

function Index() {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("No");
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);
  const [selectedRadioBtn1, setSelectedRadioBtn1] = React.useState("No");
  const handleRadioClick1 = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn1(e.currentTarget.value);
  const [selectedRadioBtn2, setSelectedRadioBtn2] = React.useState("No");
  const handleRadioClick2 = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn2(e.currentTarget.value);

  return (
    <ApplicationLayout>
      <div className="securityContainer">
        <div className="securityContent">
          <div className="facility">
            <div className="maintitle">FACILITY</div>
            <div>
              <span>Requested Facility Type</span>
              <select name="" id="" className="inputs">
                <option value="" disabled selected hidden>
                  Select Type...
                </option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div>
              <span>Requested Financing Ratio</span>
              <input type="text" className="inputs" placeholder="Ratio..." />
            </div>
            <div>
              <span>Please enter the requested facility amount</span>
              <input type="text" className="inputs" placeholder="Amount..." />
            </div>
            <div>
              <span>Please enter the requested tenure</span>
              <input type="date" className="inputs" id="calendar" />
            </div>
            <div>
              <span>Please enter the requested purpose</span>
              <input type="text" className="inputs" placeholder="Purpose..." />
            </div>
            <div>
              <span>Please enter the requested Source of Repayment</span>
              <input type="text" className="inputs" placeholder="Sources..." />
            </div>
          </div>
          <div className="vLine"></div>
          <div className="collateral">
            <div className="maintitle">INTEREST</div>

            <div className="radioBack">
              <span>Will any collateral be provided?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    id="ECACoverYes"
                    name="otherInfoRadio"
                    value="Yes"
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
                    onChange={handleRadioClick}
                  />
                  <label htmlFor="ECACoverNO">No</label>
                </div>
              </div>
              {selectedRadioBtn == "Yes" ? <></> : <></>}
            </div>

            {selectedRadioBtn == "Yes" ? (
              <div className="radioBack">
                <span>
                  Do you have significant influence on security/collateral
                  provider?
                </span>
                <div>
                  <div>
                    <input
                      type="radio"
                      id="ECRYes"
                      name="otherInfoRadio1"
                      value="Yes"
                      onChange={handleRadioClick1}
                    />
                    <label htmlFor="ECRYes">YES</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="ECRNO"
                      name="otherInfoRadio1"
                      value="No"
                      onChange={handleRadioClick1}
                    />
                    <label htmlFor="ECRNO">NO</label>
                  </div>
                </div>
                {selectedRadioBtn1 == "Yes" ? (
                  <div className="radioBackIn">
                    <span>Please explain</span>
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Description"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            {selectedRadioBtn == "Yes" ? (
              <div className="radioBack">
                <span>
                  Do you have payment experience with security/collateral
                  provider?
                </span>
                <div>
                  <div>
                    <input
                      type="radio"
                      id="ECRYes"
                      name="otherInfoRadio2"
                      value="Yes"
                      onChange={handleRadioClick2}
                    />
                    <label htmlFor="ECRYes1">YES</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="ECRNO"
                      name="otherInfoRadio2"
                      value="No"
                      onChange={handleRadioClick2}
                    />
                    <label htmlFor="ECRNO1">NO</label>
                  </div>
                </div>
                {selectedRadioBtn2 == "Yes" ? (
                  <div className="radioBackIn">
                    <span>Please explain</span>
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Description"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default Index;
