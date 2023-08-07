import React from "react";
import AboutUs from "./about-us";
import Services from "./services";
import BrandSlide from "./brand-slide";


function About (){
    return(
        <div className="About-cont">
            <AboutUs/>
            <Services/>
            <BrandSlide/>
        </div>
    )
}

export default About