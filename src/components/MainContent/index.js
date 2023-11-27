import React from "react";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone4 from "../../assets/iphone4.png";
import tablet from "../../assets/tablet.png";

import "./styles.css";
import BoxStyle from "../common/BoxStyle";
let data =[
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
export default function MainContent() {
    return (
        <div className="main">
            <div className="main-content">
                <h1 className="title">It's time to trade,</h1>
                <h1 className="title">the <b className="glow-green">future.</b></h1>
                <p>Trade BTC. ETH Futures With 125x Leverage And Earn Rewards.</p>
                <div className="main-content-iphones">
                    <div className="iphone-bg"></div>
                    <img className="iphone1" src={iphone1} alt="iphone1" />
                    <img className="iphone4" src={iphone4} alt="iphone4" />
                    <img className="iphone2" src={iphone2} alt="iphone2" />
                </div>
            </div>
            <BoxStyle dataMap={data} styleClass="main-content-stats" />
            <div className="tablet-content">
                <h1 className="title">Explore the Markets</h1>
                <h1 className="title">like it is your <b className="glow">Playground.</b></h1>
                <p>Search for your fav</p>
                <img className="tablet" src={tablet} alt="tablet" />
            </div>
        </div>
    );
}