import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/density.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import "./styles.css";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <div className="footer-links">
                <p>Blog</p>
                <p>Fee</p>
                <p>Leaderboard</p>
                <p>Careers</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
            </div>
            <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
            <div className="social-links">
                <Link to="/"><img src={facebook} alt="facebook" /></Link>
                <Link to="/"><img src={twitter} alt="twitter" /></Link>
                <Link to="/"><img src={linkedin} alt="linkedin" /></Link>
                <Link to="/"><img src={instagram} alt="instagram" /></Link>
                
            </div>
        </footer>
    );
}

export default Footer;