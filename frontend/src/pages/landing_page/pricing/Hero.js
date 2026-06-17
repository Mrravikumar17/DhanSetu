import React from "react";

function Hero() {
    return (
        <div className="container mt-5  border-bottom">
            {/* Changed my-5 p-5 to responsive padding/margin classes */}
            <div className="row text-center my-4 my-md-5 p-3 p-md-5">
                <h1 className="display-4 fw-semibold">Charges</h1>
                <p className="text-muted fs-5 mb-5">List of all charges and taxes</p>

                {/* Column 1 */}
                <div className="col-12 col-md-4 mb-4 mb-md-0 px-4">
                    <img src="assets/pricing0.svg" className="img-fluid mb-3" alt="Free Equity" style={{ maxHeight: "150px" }} />
                    <h2 className="fs-4">Free equity delivery</h2>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="col-12 col-md-4 mb-4 mb-md-0 px-4">
                    <img src="assets/intradayTrades.svg" className="img-fluid mb-3" alt="Intraday Trades" style={{ maxHeight: "150px" }} />
                    <h2 className="fs-4">Intraday and F&O trades</h2>
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades. Flat
                        ₹20 on all option trades.
                    </p>
                </div>

                {/* Column 3 */}
                <div className="col-12 col-md-4 mb-4 mb-md-0 px-4">
                    <img src="assets/pricingEquity.svg" className="img-fluid mb-3" alt="Free Mutual Funds" style={{ maxHeight: "150px" }} />
                    <h2 className="fs-4">Free direct MF</h2>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;