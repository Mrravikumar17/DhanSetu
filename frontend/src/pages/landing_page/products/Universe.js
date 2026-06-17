import React from "react";

function Universe() {
    return (
        <div className="container my-5">
            {/* Header Section */}
            <div className="row text-center mb-5">
                <div className="col-12 px-4">
                    <h1 className="fw-bold display-5">DhanSetu Universe</h1>
                    <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>
                </div>
            </div>

            {/* Grid Container - row-cols utilities natively handle dynamic columns */}
            {/* row-cols-1 (mobile: 1 item per row), row-cols-md-2 (tablet: 2 items per row), row-cols-lg-3 (desktop: 3 items per row) */}
            <div className="row text-center g-5 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">

                {/* Partner 1 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/smallcaseLogo.png" alt="Smallcase" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Thematic investing platform that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                </div>

                {/* Partner 2 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/streakLogo.png" alt="Streak" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Systematic trading platform that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                </div>

                {/* Partner 3 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/dittoLogo.png" alt="Ditto Insurance" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Personalized advice on life and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                </div>

                {/* Partner 4 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/zerodhaFundhouse.png" alt="Zerodha Fund House" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Our asset management venture that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                </div>

                {/* Partner 5 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/sensibullLogo.svg" alt="Sensibull" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Options trading platform that lets you create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                </div>

                {/* Partner 6 */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center h-100">
                        <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: "60px" }}>
                            <img src="assets/goldenpiLogo.png" alt="GoldenPi" className="img-fluid mh-100" />
                        </div>
                        <p className="text-muted px-2">
                            Bonds trending platform.
                        </p>
                    </div>
                </div>

                    <button className='btn btn-primary p-2 fs-5 my-5' style={{ width: "20%", margin: " 0 auto" }}>Signup free</button>
            </div>
        </div>
    );
}

export default Universe;