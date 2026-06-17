import React from 'react';

function Footer() {
    return (
        <footer className="bg-white border-top py-5 text-muted" style={{ fontSize: '0.9rem' }}>
            <div className="container">
                <div className="row">

                    {/* Column 1: Logo and Company Info */}
                    <div className="col-12 col-md-4 mb-4">
                        <img
                            src="assets/dhansetunew.png"
                            alt="DhanSetu Logo"
                            style={{ width: '140px', marginBottom: '15px' }}
                        />

                        <p className="mt-2 mb-4">
                            © 2026 - 2027, DhanSetu Technologies Pvt. Ltd.<br />
                            All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mb-4 fs-5 text-secondary">
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>

                        <div className="d-flex gap-3 mb-4 fs-5 text-secondary">
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-telegram"></i>
                        </div>

                        {/* App Buttons */}
                        <div className="d-flex gap-2 mt-3">
                            <img
                                src="assets/googlePlayBadge.svg"
                                alt="Google Play"
                                style={{ height: '35px' }}
                            />

                            <img
                                src="assets/appstoreBadge.svg"
                                alt="App Store"
                                style={{ height: '35px' }}
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-6 col-md-2 mb-4">
                        <h5 className="text-dark mb-3 fs-5">Accounts</h5>

                        <ul className="list-unstyled lh-lg">
                            <li><a href="#" className="text-decoration-none text-muted">Open account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Investment account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Mutual funds</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Stock investing</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">SIP plans</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-6 col-md-2 mb-4">
                        <h5 className="text-dark mb-3 fs-5">Support</h5>

                        <ul className="list-unstyled lh-lg">
                            <li><a href="#" className="text-decoration-none text-muted">Help center</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Contact us</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Downloads</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Status</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-6 col-md-2 mb-4">
                        <h5 className="text-dark mb-3 fs-5">Company</h5>

                        <ul className="list-unstyled lh-lg">
                            <li><a href="#" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Press</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Blog</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Privacy policy</a></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="col-6 col-md-2 mb-4">
                        <h5 className="text-dark mb-3 fs-5">Quick Links</h5>

                        <ul className="list-unstyled lh-lg">
                            <li><a href="#" className="text-decoration-none text-muted">Market overview</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Top stocks</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">IPO</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Calculators</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Learning center</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div
                    className="row mt-4 pt-4 border-top text-muted"
                    style={{ fontSize: '0.75rem' }}
                >
                    <div className="col-12">
                        <p>
                            DhanSetu is a modern investing platform designed to simplify
                            investing and wealth creation for everyone. Investments in
                            securities markets are subject to market risks. Please read all
                            related documents carefully before investing.
                        </p>

                        <p>
                            For support or queries, contact us at
                            <a
                                href="mailto:support@dhansetu.com"
                                className="text-primary text-decoration-none ms-1"
                            >
                                support@dhansetu.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;