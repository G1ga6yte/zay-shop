import React from "react";
import "./brand-slide.scss";
import Slider from "react-slick";
import {Img} from "../../../assets/images/imagesData";

function BrandSlide (){
  const settingss = {
    dots          : true,
    infinite      : true,
    speed         : 500,
    slidesToShow  : 4,
    slidesToScroll: 1,
    arrows        : true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
  };
  
  return (
     <div className="brand-block">
        <h2 className="brand-h2">Our Brands</h2>
        <p className="brand-prg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
        <div className="brand-slider G-flex G-flex-between">
          <Slider {...settingss}>
            {/*<div className="brand-slider-page">*/}
              <a className="page-link" href=""> <img className="page-img" src={Img.brand01}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand02}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand03}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand04}  alt=""/> </a>
            {/*</div>*/}
            {/*<div className="brand-slider-page">*/}
              <a className="page-link" href=""> <img className="page-img" src={Img.brand01}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand02}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand03}  alt=""/> </a>
              <a className="page-link" href=""> <img className="page-img" src={Img.brand04}  alt=""/> </a>
            {/*</div>*/}
          </Slider>
        </div>
     </div>
  );
}

export default BrandSlide

