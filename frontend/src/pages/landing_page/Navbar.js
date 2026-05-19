import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar bg-white border-bottom py-3 sticky-top">
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="assets/dhansetunew.png"
                        alt="Logo"
                        style={{ width: '130px' }}
                    />
                </Link>

                {/* Right-aligned Links and Hamburger Menu */}
                <div className="d-flex align-items-center ms-auto">
                    {/* Desktop Links */}
                    <ul className="navbar-nav flex-row d-none d-md-flex align-items-center mb-0 me-4 ">
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-secondary" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-secondary" to="/about">About</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-secondary" to="/product">Products</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-secondary" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-secondary" to="/support">Support</Link>
                        </li>
                    </ul>

                    {/* Hamburger Menu Icon */}
                    <button
                        className="btn border-0 p-0 ms-3 d-flex align-items-center text-secondary"
                        type="button"
                        aria-label="Menu"
                    >
                        <MenuIcon />

                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;