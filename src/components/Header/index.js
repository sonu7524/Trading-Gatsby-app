import React from "react";
import logo from "../../assets/logo.png";
import Button from "../common/Button";
import "./styles.css";

export default function Header() {
    return (
        <div className="navbar-layout">
            <nav className="header">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                    <p>density</p>
                </div>
                <div className="menu">
                    <p>Career</p>
                    <p>Blogs</p>
                    <p>Leaderboard</p>
                    <p>Fees</p>
                    <Button text="TRADE NOW" />
                </div>  
            </nav>
        </div>
    );
}