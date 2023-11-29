import React from "react";
import "./styles.css";
import percentIcon from "../../assets/percentIcon.png";
import managerIcon from "../../assets/manager.png";

export default function BenefitsUI() {
    return (
        <div className="benefits-ui">
            <h1 className="title">Start Small. Earn Big.</h1>
            <p className="subtitle">
            Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager
            </p>
            <div className="benefit-cards">
                <div className="benefit-card">
                    <img className="percent" src={percentIcon} alt="percentIcon" />
                    <h1>Deposit Bonus.</h1>
                    <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
                </div>
                <div className="benefit-card">
                    <img className="manager" src={managerIcon} alt="managerIcon" />
                    <h1>Dedicated
Relationship Manager.</h1>
                    <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
                </div>
            </div>
        </div>
    );
}