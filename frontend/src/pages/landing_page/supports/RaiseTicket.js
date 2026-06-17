import React from "react";
import {
  Search,
  UserPlus,
  Wallet,
  ShieldCheck,
  BadgeIndianRupee,
  MessageCircle,
} from "lucide-react";

function RaiseTicket() {
  return (
    <div>

      {/* SUPPORT CARDS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <UserPlus size={40} className="text-primary mb-3" />

                <h4>Account Opening</h4>

                <p className="text-muted">
                  Open your DhanSetu account quickly and start investing in
                  minutes.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <Wallet size={40} className="text-primary mb-3" />

                <h4>Funds & Withdrawals</h4>

                <p className="text-muted">
                  Get help with adding funds, withdrawals, and payment issues.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <BadgeIndianRupee
                  size={40}
                  className="text-primary mb-3"
                />

                <h4>Charges & Pricing</h4>

                <p className="text-muted">
                  Understand brokerage, taxes, and transaction charges.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <ShieldCheck size={40} className="text-primary mb-3" />

                <h4>Account Security</h4>

                <p className="text-muted">
                  Reset passwords, enable 2FA, and secure your account.
                </p>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <MessageCircle size={40} className="text-primary mb-3" />

                <h4>Live Chat Support</h4>

                <p className="text-muted">
                  Connect instantly with our support executives anytime.
                </p>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <Search size={40} className="text-primary mb-3" />

                <h4>Trading & Orders</h4>

                <p className="text-muted">
                  Support for order execution, holdings, and market queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CONTACT SUPPORT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* TEXT */}
            <div className="col-lg-6 ">
              <h2 className="fw-bold display-6 mb-4">
                Need personalized help?
              </h2>

              <p className="text-muted fs-5 mb-4">
                Our support team is available to assist you with trading,
                investments, technical issues, and account-related queries.
              </p>

              <button className="btn btn-primary px-4 py-2 rounded-3 me-3">
                Create Ticket
              </button>

              <button className="btn btn-outline-dark px-4 py-2 rounded-3">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <h1 className="fw-bold text-primary">24×7</h1>
              <p className="text-muted">AI Chat Assistance</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="fw-bold text-primary">&lt; 2 min</h1>
              <p className="text-muted">Average response time</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="fw-bold text-primary">1M+</h1>
              <p className="text-muted">Queries resolved</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="fw-bold text-primary">99.9%</h1>
              <p className="text-muted">Platform uptime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RaiseTicket;