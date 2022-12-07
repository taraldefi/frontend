import ApplicationLayout from '@components/layouts/new_application_layout'
import ButtonSecondary from '@components/widgets/buttonSecondary'
import React from 'react'

function Index() {
    return (
        <ApplicationLayout>
            <div className="ptContainer">
                <div className="productContainer">
                    <div className="maintitle">PRODUCTS</div>
                    <div className="selectBack">
                        <div className="maintitle">PRODUCTS #1</div>
                        <div className="rowBox">
                            <div className="inputContainer">
                                <span>Product Name</span>
                                <input type="text" className="inputs" placeholder="Product name..." />
                            </div>
                            <div className="inputContainer">
                                <span>Quantity</span>
                                <input type="text" className="inputs" placeholder="Quantity..." />
                            </div>
                            <div className="inputContainer">
                                <span>Unit Price</span>
                                <select name="" className="inputs" id="">
                                    <option id="">Unit Price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="selectBack">
                        <div className="maintitle">PRODUCTS #1</div>
                        <div className="rowBox">
                            <div className="inputContainer">
                                <span>Product Name</span>
                                <input type="text" className="inputs" placeholder="Product name..." />
                            </div>
                            <div className="inputContainer">
                                <span>Quantity</span>
                                <input type="text" className="inputs" placeholder="Quantity..." />
                            </div>
                            <div className="inputContainer">
                                <span>Unit Price</span>
                                <select name="" className="inputs" id="">
                                    <option id="">Unit Price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ButtonSecondary title={'+ Add Product'} onClick={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                        throw new Error('Function not implemented.')
                    } }></ButtonSecondary>
                </div>
                <div className="vLine"></div>
                <div className="portContainer">
                    <div className="maintitle">PORTS</div>
                    <div className="inputContainer">
                        <span>Port of Export</span>
                        <input type="text" className="inputs" id="search" placeholder="Search ports..."/>
                    </div>
                    <div className="inputContainer">
                        <span>Port of Import</span>
                        <input type="text" className="inputs" id="search" placeholder="Search ports..."/>
                    </div>
                </div>
            </div>
        </ApplicationLayout>
    )
}

export default Index