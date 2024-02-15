import React from "react";

const Nav = () => {
    return (
        <div>
            <header>
                <div className="nav-logo">
                    <span className="logo-letters">tech</span>Hive
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div className="cta">Login</div>
            </header>
        </div>
    );
};

export default Nav;
