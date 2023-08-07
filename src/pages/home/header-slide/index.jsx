import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import {dataD} from "./slide-data";

function SliderCont() {
  const settings = {
    dots          : false,
    infinite      : true,
    speed         : 500,
    slidesToShow  : 1,
    slidesToScroll: 1,
    arrows        : true,
    autoplay      : true,
    autoplaySpeed : 3000,
  };
  return (
     <div className="slider-block">
       <div className="slider-container G-container">
         <Slider {...settings}>
           {dataD.map((el) => {
             return <div className="home-slide-Item">
               <div className="item-text-block">
                 <h1 className="item-header" dangerouslySetInnerHTML={{__html: el.name}}></h1>
                 <span className="item-description" dangerouslySetInnerHTML={{__html: el.descr}}></span>
                 <p className="item-prg" dangerouslySetInnerHTML={{__html: el.prg}}></p>
               </div>
               <img className="item-img" src={el.img} width="600" alt=""/>
             </div>;
           })}
         </Slider>
       </div>
     </div>
  
  );
}

export default SliderCont;