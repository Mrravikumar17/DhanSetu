import React from 'react';
import { Search } from 'lucide-react';

function Hero() {
  return (
    <div className='container'>
      <div className='row my-5 text-center'>
        <h1 className="fw-bold display-4 mb-3">Support Portal</h1>

          <p className="text-muted fs-5 mb-5">
            Find answers, raise tickets, and get help with your investments.
          </p>

          {/* SEARCH BAR */}
          <div
            className="d-flex align-items-center bg-white border rounded-4 px-4 py-3 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <Search size={20} className="text-muted" />

            <input
              type="text"
              placeholder="Search for issues, FAQs, trading..."
              className="form-control border-0 shadow-none ms-2"
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-4">
            <button className="btn btn-primary px-4 py-2 me-3 rounded-3">
              Raise Ticket
            </button>

            <button className="btn btn-outline-dark px-4 py-2 rounded-3">
              Track Ticket
            </button>

          
        </div>
      </div>
    </div>
  );
}

export default Hero;