import React from 'react';
import "./navigation.scss"
import {Link} from "react-router-dom";
import "../assets/svgs/style.css"




const Navigation = () => {
    return (
        <div className="navigation-cont">
            <div className="contacts-cont">
                <div className="header-contacts G-flex G-flex-between G-container G-align-center">
                    <div className="mail-number G-flex G-align-center">
                        <a href="" className="links icon-mail G-flex G-align-center">
                            <p className="link-p">info@company.com</p>
                        </a>
                        <a href="" className="links icon-phone G-flex G-align-center">
                            <p className="link-p">010-020-0340</p>
                        </a>
                    </div>
                    <div className="web-sites G-flex">
                        <a href="" className="links icon-facebook"></a>
                        <a href="" className="links icon-instagram"></a>
                        <a href="" className="links icon-twitter"></a>
                        <a href="" className="links icon-linkedin"></a>
                    </div>
                </div>
            </div>
            <div className="navigation-block G-flex G-flex-between G-align-center G-container">
                <Link to="/" className="Zay-logo">Zay</Link>
                <div className="navigation-block G-flex G-align-center">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
                <div className="nav-tools">
                    <a href="" className="tools-link icon-search"></a>
                    <a href="" className="tools-link icon-cart-arrow-down"></a>
                    <a href="" className="tools-link icon-user"></a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
