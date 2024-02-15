import React from "react";

const Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">Logo</div>
                <ul className="nav-ul-list">
                    <li className="nav-list">About Us</li>
                    <li className="nav-list">Contact Us</li>
                    <li className="nav-list">Services</li>
                    <li className="nav-list">Pricing</li>
                </ul>
                <div className="nav-login">Login</div>
            </nav>
        </div>
    );
};

export default Nav;
