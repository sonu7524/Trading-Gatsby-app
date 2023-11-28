import React from "react";
import "./styles.css";
import densityLogo from "../../assets/logo-black.png";
import coindcx from "../../assets/coindcx.png";
import deltaExchange from "../../assets/delta-exchange.png";
export default function FeaturesUI() {
    return (
        <div className="features-ui">
            <h1 className="title">Trade More. <b className="glow">Pay Less.</b></h1>
            <p>Our low Fees Supercharge Your Profits</p>
            <div className="feature-cards">
                <div className="feature-card">
                    <img src={coindcx} alt="densityLogo" />
                    <div>
                        <h2>0.025</h2>
                        <p>Maker Fees</p>
                    </div>
                    <div>
                        <h2>0.07</h2>
                        <p>Taker Fees</p>
                    </div>
                </div>
                <div className="feature-card highlight">
                    <img src={densityLogo} alt="densityLogo" />
                    <div>
                        <h2>0.02</h2>
                        <p>Maker Fees</p>
                    </div>
                    <div>
                        <h2>0.04</h2>
                        <p>Taker Fees</p>
                    </div>
                </div>
                <div className="feature-card">
                    <img src={deltaExchange} alt="densityLogo" />
                    <div>
                        <h2>0.02</h2>
                        <p>Maker Fees</p>
                    </div>
                    <div>
                        <h2>0.05</h2>
                        <p>Taker Fees</p>
                    </div>
                </div>
            </div>
        </div>
    )
}