import { faEllipsis, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { balanceSheetTableType } from 'types/widget_table';
interface Props {
    TableData: balanceSheetTableType;
}
export const BalanceTable = ({ TableData }: Props) => {

    return (
        <div className="balanceTable">
            <div className="tableJoint">
                <div className="contentBox">
                    <div className="tableTitles">
                        <div className="statusTitle">
                            <div className="statusTitleItems">IN THDS EUR</div>
                        </div>
                    </div>
                    <div className="titleColumn">
                        {[
                            "Current Assets",
                            "Cash",
                            "Non-Current Assets",
                            "Property, Plant & Equipment",
                            "Current Liabilities",
                            "Accounts Payable",
                            "Non - Current Liabilities",
                            "Bank Loans",
                            "Total Liabilities",
                            "Equity",
                            "Paid In Capital",
                            "Total Liabilities & Equity",
                        ].map((item, index) => {
                            return (
                                <div className="columnContent" key={index}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="tableContent">
                    <div className="rowContent">
                        {Object.keys(TableData).map((key, index) => {
                            return (
                                <div className="columnItems" key={index}>
                                    <div className="contentTitle">
                                        {Object.keys(TableData)[index]}
                                    </div>
                                    {Object.keys(TableData[key]).map((item, index) => {
                                        return (
                                            <div className="items" key={index}>
                                                {TableData[key][`${item}`] == 0 ? (
                                                    <FontAwesomeIcon
                                                        icon={faEllipsis}
                                                        className="iconx"
                                                    />
                                                ) : (
                                                    <div id="euro">
                                                        {TableData[key][`${item}`]}
                                                        <FontAwesomeIcon
                                                            icon={faEuroSign}
                                                            className="iconx"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
