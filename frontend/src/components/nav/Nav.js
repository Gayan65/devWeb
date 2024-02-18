import React, { useState } from "react";

const Nav = () => {
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
    };
    return (
        <div>
            <header className="desktop-header">
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
                <button className="cta nav-login">Login</button>
            </header>
            {/* Mob Nav version start */}
            <div className="mobnav">
                {isToggled && (
                    <nav>
                        <ul className="nav-links loading-list">
                            <li className="loading-list-item">
                                <a href="#">About Us</a>
                            </li>
                            <li className="loading-list-item">
                                <a href="#">Contact Us</a>
                            </li>
                            <li className="loading-list-item">
                                <a href="#">Services</a>
                            </li>
                            <li className="loading-list-item">
                                <a href="#">Pricing</a>
                            </li>
                            <li className="loading-list-item">
                                <button className="cta">Login</button>
                            </li>
                        </ul>
                    </nav>
                )}
                <div className="nav-toggler" onClick={handleToggle}></div>
            </div>
        </div>
    );
};

export default Nav;
