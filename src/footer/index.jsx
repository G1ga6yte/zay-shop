import React from "react";
import "./footer.scss";

function Footer() {
  return (
     <div className="footer-cont">
       
       <div className="footer-links-cont G-container G-flex G-flex-between">
         
         <ul className="links-section G-flex">
           <li className="section-header zay-shop">Zay Shop</li>
           <li className="li"><span className="li-icon icon-location_on"></span> <a className="li-link" href="">123 Consectetur at ligula 10660</a></li>
           <li className="li"><span className="li-icon icon-phone"></span> <a className="li-link" href=""> 010-020-0340</a></li>
           <li className="li"><span className="li-icon icon-mail"></span> <a className="li-link" href="">info@company.com</a></li>
         </ul>
  
         <ul className="links-section G-flex">
           <li className="section-header">Products</li>
           <li className="li"><a className="li-link" href="">Luxury</a></li>
           <li className="li"><a className="li-link" href="">Sport Wear</a></li>
           <li className="li"><a className="li-link" href="">Men's Shoes</a></li>
           <li className="li"><a className="li-link" href="">Women's Shoes</a></li>
           <li className="li"><a className="li-link" href="">Popular Dress</a></li>
           <li className="li"><a className="li-link" href="">Gym Accessories</a></li>
           <li className="li"><a className="li-link" href="">Sport Shoes</a></li>
         </ul>
  
         <ul className="links-section G-flex">
           <li className="section-header">Further Info</li>
           <li className="li"><a className="li-link" href="">Home</a></li>
           <li className="li"><a className="li-link" href="">About Us</a></li>
           <li className="li"><a className="li-link" href="">Shop Locations</a></li>
           <li className="li"><a className="li-link" href="">FAQs</a></li>
           <li className="li"><a className="li-link" href="">Contact</a></li>

         </ul>
         
         {/*<div className="links-section zay-shop-block">*/}
         {/*   <h2 className="zay-shop-text">Zay Shop</h2>*/}
         {/*   <span className="line"></span>*/}
         {/*   <p className="zay-link address"><span className="link-icon icon-location_on"></span>123 Consectetur at ligula 10660</p>*/}
         {/*   <p className="zay-link phone-number"><span className="link-icon icon-phone"></span><a className="link-a" href="">010-020-0340</a></p>*/}
         {/*   <p className="zay-link mail-address"><span className="link-icon icon-mail"></span><a className="link-a" href="">info@company.com</a></p>*/}
         {/* </div>*/}
         
         {/* <div className="links-section products-block G-flex">*/}
         {/*   <h3 className="products-header">Products</h3>*/}
         {/*   <span className="line"></span>*/}
         {/*   <a href="" className="product-links">Luxury</a>*/}
         {/*   <a href="" className="product-links">Sport Wear</a>*/}
         {/*   <a href="" className="product-links">Men's Shoes</a>*/}
         {/*   <a href="" className="product-links">Women's Shoes</a>*/}
         {/*   <a href="" className="product-links">Popular Dress</a>*/}
         {/*   <a href="" className="product-links">Gym Accessories</a>*/}
         {/*   <a href="" className="product-links">Sport Shoes</a>*/}
         
         {/* </div>*/}
         {/* */}
         {/* <div className="links-section further-info-block G-flex">*/}
         {/*   <h3 className="further-header">Further Info</h3>*/}
         {/*   <span className="line"></span>*/}
         {/*   <a href="" className="product-links">Home</a>*/}
         {/*   <a href="" className="product-links">About Us</a>*/}
         {/*   <a href="" className="product-links">Sho Location</a>*/}
         {/*   <a href="" className="product-links">FAQs</a>*/}
         {/*   <a href="" className="product-links">Contact</a>*/}
         
         {/* </div>*/}
         
         {/*</div>*/}
         
         {/*<div className="long-line G-container"></div>*/}
         
         {/*<div className="sites-email-cont G-container G-flex G-flex-between">*/}
         {/*  <div className="websites-block">*/}
         {/*    <a className="websites-link" href=""><span className="icon-facebook"></span></a>*/}
         {/*    <a className="websites-link" href=""><span className="icon-instagram"></span></a>*/}
         {/*    <a className="websites-link" href=""><span className="icon-twitter"></span></a>*/}
         {/*    <a className="websites-link" href=""><span className="icon-linkedin"></span></a>*/}
         {/*  </div>*/}
         {/*  <div className="input-button-block">*/}
         {/*    <input className="email-input" type="text" placeholder="Email address"/>*/}
         {/*    <button className="subscribe-button">Subscribe</button>*/}
         {/*  </div>*/}
         {/*</div>*/}
         
         {/*<div className="copyrights-cont">*/}
         {/*  <p className="copyright-text">Copyright © 2021 Company Name | Designed by <a href="">TemplateMo</a></p>*/}
       </div>
       <div className="websites-input-block G-container G-flex G-flex-between">
          <ul className="websites-links G-flex">
            <a href="" className="link"><span className="span icon-facebook"></span></a>
            <a href="" className="link"><span className="span icon-instagram"></span></a>
            <a href="" className="link"><span className="span icon-twitter"></span></a>
            <a href="" className="link"><span className="span icon-linkedin"></span></a>
          </ul>
         <div className="input-button G-flex">
           <input className="footer-input" placeholder="Email address" type="text"/>
           <button className="subscribe-button">Subscribe</button>
         </div>
       </div>
       <div className="copyright-block">
          <div className="copyright-cont G-container">
              <p className="copyright-text">Copyright © 2021 Company Name | Designed by
                <a className="template-link" href="">TemplateMo</a>
              </p>
          </div>
       </div>
     </div>
  );
}

export default Footer;