import React from "react";
import "./aboutus.scss";
import {Img} from "../../../assets/images/imagesData";

function AboutUs (){
  return (
     <div className="about-us-block">
        <div className="about-us-cont G-container G-flex G-flex-between">
            <div className="text-block">
              <h2 className="about-us-h2">About Us</h2>
              <p className="about-us-prg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          <img className="about-us-img" src={Img.aboutHero} alt=""/>
        </div>
     </div>
  )
}
export default AboutUs