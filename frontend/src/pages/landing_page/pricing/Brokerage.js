import React, { useState } from "react";

function Brokerage() {
    // State determines which content block is currently active ('brokerage' or 'charges')
    const [activeTab, setActiveTab] = useState("brokerage");

    return (
        <div className="container my-5">
            {/* Interactive Header Toggles */}
            <div className="row text-center mb-4 g-2">
                <div className="col-12 col-sm-6">
                    <button 
                        className={`btn w-100 fs-4 py-3 border-0 rounded-0 border-bottom ${
                            activeTab === "brokerage" ? "border-primary text-primary fw-semibold" : "text-muted"
                        }`}
                        onClick={() => setActiveTab("brokerage")}
                    >
                        Brokerage Calculator
                    </button>
                </div>
                <div className="col-12 col-sm-6">
                    <button 
                        className={`btn w-100 fs-4 py-3 border-0 rounded-0 border-bottom ${
                            activeTab === "charges" ? "border-primary text-primary fw-semibold" : "text-muted"
                        }`}
                        onClick={() => setActiveTab("charges")}
                    >
                        List of Charges
                    </button>
                </div>
            </div>

            {/* Dynamic Content Display Area */}
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 bg-light p-4 rounded shadow-sm">
                    
                    {/* Render Brokerage Content (Visible by Default) */}
                    {activeTab === "brokerage" && (
                        <div>
                            <h3 className="mb-3 text-dark">Important Notes & Rules</h3>
                            <ul className="lh-lg mb-0">
                                <li>
                                    <strong>Call & Trade and RMS auto-squareoff:</strong> Additional charges of ₹50 + GST per order.
                                </li>
                                <li>Digital contract notes will be sent via e-mail.</li>
                                <li>
                                    Physical copies of contract notes, if required, shall be charged
                                    ₹20 per contract note. Courier charges apply.
                                </li>
                                <li>
                                    For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                                    equity (whichever is lower).
                                </li>
                                <li>
                                    For NRI account (PIS), 0.5% or ₹200 per
                                    executed order for equity (whichever is lower).
                                </li>
                                <li>
                                    If the account is in debit balance, any order placed will be charged 
                                    ₹40 per executed order instead of ₹20 per executed order.
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Render List of Charges Content */}
                    {activeTab === "charges" && (
                        <div className="py-3">
                            <h3 className="mb-3 text-dark">DhanSetu Pricing Structure</h3>
                            <p className="text-muted fs-5 lh-base mb-0">
                                Explore the transparent and affordable pricing offered by DhanSetu across equity, 
                                derivatives, mutual funds, and other investment products. No hidden fees, no 
                                unnecessary charges — just simple and investor-friendly pricing.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Brokerage;