import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../common/Button";
import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`navbar-layout ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <nav className="header">
                <div className={`logo ${isMobileMenuOpen ? 'logo-hide' : ''}`}>
                    <img src={logo} alt="Logo" />
                    <p>density</p>
                </div>
                <div className={`menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <p>Career</p>
                    <p>Blogs</p>
                    <p>Leaderboard</p>
                    <p>Fees</p>
                    <Button text="TRADE NOW" />
                </div>
                <div className={`toggle-button ${isMobileMenuOpen ? 'hidden' : ''}`} onClick={handleToggleClick}>
                    <GiHamburgerMenu />
                </div>
                {isMobileMenuOpen && (
                    <div className="close-button" onClick={handleToggleClick}>
                        <IoCloseSharp />
                    </div>
                )}
            </nav>
        </div>
    );
}

