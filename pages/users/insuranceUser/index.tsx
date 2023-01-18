import TopBar from '@components/topBar'
import React from 'react'

function index() {
    return (
        <>
            <TopBar></TopBar>
            <div className="insurance-container">
                <div className="insurance-contents">
                    <div className="insurance-title-container">
                        <span>PAGE TITLE</span>
                        <span>page description and overview.</span>
                    </div>
                    <div className="insurance-balance-container">
                        <div className="available-balance">
                            <div className="balance">AVAILABLE BALANCE</div>
                        </div>
                        <div className="tal-balance">
                            <span>1,483.406843</span>
                            <span>TAL</span>
                        </div>
                        <div className="st-tal-balance">
                            <span>0.00</span>
                            <span>stTAL</span>
                        </div>
                    </div>
                    <div className="insurance-tal-container"></div>
                    <div className="insurance-unstacked-container"></div>
                </div>
                <div className="insurance-info"></div>
            </div>
        </>
    )
}

export default index