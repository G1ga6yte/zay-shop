import React, {useState} from "react";
import "./navigation.scss"
import {Link} from "react-router-dom";
import "../assets/svgs/style.css";
import {useCartContext} from "../CartContext";


const Navigation = () => {
    
    const [menu, setMenu]= useState(false)
    
    
    const {cartCount} = useCartContext()
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
                    <Link  to="/cart"  className="tools-link icon-cart-arrow-down">
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                    <a href="" className="tools-link icon-user"></a>
                </div>
                <div className="nav-burger">
                    <input checked={menu} id="menu-toggle" type="checkbox"/>
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div onClick={()=>{setMenu(!menu)}} className='menu-button icon-menu'></div>
                    </label>
    
                    <ul className="menu">
                        <li><Link onClick={()=>setMenu(!menu)} to="/home" className="nav-link">Home</Link></li>
                        <li><Link onClick={()=>setMenu(!menu)} to="/about" className="nav-link">About</Link></li>
                        <li><Link onClick={()=>setMenu(!menu)} to="/shop" className="nav-link">Shop</Link></li>
                        <li><Link onClick={()=>setMenu(!menu)} to="/contact" className="nav-link">Contact</Link></li>
                        <li className="G-flex"><a href="" onClick={()=>setMenu(!menu)} className="tools-link icon-search"></a>
                            <Link  to="/cart" onClick={()=>setMenu(!menu)}  className="tools-link icon-cart-arrow-down">
                                <span className="cart-count">{cartCount}</span>
                            </Link>
                            <a href="" onClick={()=>setMenu(!menu)} className="tools-link icon-user"></a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Navigation;
