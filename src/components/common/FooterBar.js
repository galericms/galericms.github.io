import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/about">About</Link>&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;
            <br />
            Footer, etc
        </div>
    </footer>
);
export default Footer;
