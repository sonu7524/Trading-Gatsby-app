import React from "react";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone4 from "../../assets/iphone4.png";
import tablet from "../../assets/tablet.png";
import densityPhone from "../../assets/density-phone.png";
import graph from "../../assets/graph.png";
import community from "../../assets/community.png";
import "./styles.css";
import GreenBoxStyle from "../common/BoxStyle/Green";
import Button from "../common/Button";
import WhiteBoxStyle from "../common/BoxStyle/White";
import PhoneDisplay from "../PhoneDisplay";
import ReviewContent from "../ReviewContent";
import PhoneUI from "../PhoneUI";
import FeaturesUI from "../FeaturesUI";
import BenefitsUI from "../BenefitsUI";
import PartnerBlock from "../PartnerBlock";
let data1 =[
    {
        title:"00%",
        description:"Conversion Fee"
    },
    {
        title:"500 Mn+",
        description:"Lifetime Volume Traded"
    },
    {
        title:"250+",
        description:"Total Tradable Pairs"
    },
    {
        title:"125x",
        description:"Leverage"
    }
]

const data2 = ["Same Strategy", "Same Indicators", "Better Leverage", "24x7 Trading"]
export default function MainContent() {
    return (
        <div className="main">
            <div className="main-content">
                <h1 className="main-title">It's time to trade,</h1>
                <h1 className="main-title">the <b className="glow-green">future.</b></h1>
                <p>Trade BTC. ETH Futures With 125x Leverage And Earn Rewards.</p>
                <div className="main-content-iphones">
                    <div className="iphone-bg"></div>
                    <img className="iphone1" src={iphone1} alt="iphone1" />
                    <img className="iphone4" src={iphone4} alt="iphone4" />
                    <img className="iphone2" src={iphone2} alt="iphone2" />
                </div>
            </div>
            <GreenBoxStyle dataMap={data1} styleClass="main-content-stats" />
            <PhoneUI />
            <FeaturesUI />
            <div className="tablet-content">
                <h1 className="title">Explore the Markets</h1>
                <h1 className="title">like it is your <b className="glow">Playground.</b></h1>
                <p>Search for your favorite coins and stay ahead of the market</p>
                <img className="tablet" src={tablet} alt="tablet" />
                <Button text="EXPLORE MARKETS" />
            </div>
            <div className="unlock">
                <h1 className="title"><b className="glow">Unlock</b> New Frontiers.</h1>
                <div className="unlock-content">
                    <p>Are you a stock trader looking for new opportunities to make</p>
                    <p>money? We got you covered!</p>
                </div>
                <WhiteBoxStyle dataMap={data2} styleClass="main-content-stats" />
            </div>
            <img className="statistics" style={{width: "60%"}} src={graph} alt="graph" />
            <BenefitsUI />
            <PhoneDisplay />
            <ReviewContent />
            <img className="community" style={{width: "100%"}} src={community} alt="community" />
            <PartnerBlock />
            <div className="start">
                <h1 className="main-title">Get Started Now.</h1>
                <img className="densityPhone" src={densityPhone} alt="densityPhone" />
                <button className="start-button">Start Trading!</button>
            </div>
        </div>
    );
}