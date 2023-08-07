import React from "react";
import "./services.scss"

function Services (){
  return (
     <div className="services-block">
       <h2 className="services-h2">Our Services</h2>
       <p className="services-prg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
       <div className="services-cont G-container G-flex G-flex-between">
         <div className="service-item G-flex">
           <span className="item-icon icon-truck mirror"></span>
           <h3 className="item-h3">Delivery Services</h3>
         </div>
  
         <div className="service-item G-flex">
           <span className="item-icon icon-exchange"></span>
           <h3 className="item-h3">Shipping & Return</h3>
         </div>
  
         <div className="service-item G-flex">
           <span className="item-icon icon-percent"></span>
           <h3 className="item-h3">Promotion</h3>
         </div>
  
         <div className="service-item G-flex">
           <span className="item-icon icon-user"></span>
           <h3 className="item-h3">24 Hours Service</h3>
         </div>
       </div>
     </div>
  )
}

export default Services