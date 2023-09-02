import React, {useEffect, useState} from "react";
import {Img} from "../../../assets/images/imagesData";
import Slider from "react-slick";
import "./item.scss";
import {useParams} from "react-router-dom";
import {ShopData} from "../../shop/shop-categories/itemsData";

function SItem() {
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  const settings = {
    dots          : false,
    infinite      : true,
    speed         : 1500,
    slidesToShow  : 3,
    slidesToScroll: 3,
    arrows        : true,
    autoplay      : true,
    autoplaySpeed : 3000,
  };
  
  const {id} = useParams();
  const [uniqeData, setUniqeData] = useState([]);
  
  useEffect(() => {
    const filteredData = ShopData.filter((element) => element.id.toString() === id);
    if (filteredData.length > 0) {
      setUniqeData(filteredData);
    }
  }, [id]);
  
  return (
     <div className="shop-item-block ">
       {uniqeData.map((element) => {
         return (
            <div className="shop-item-cont G-container G-flex G-flex-between">
              <div className="images-block">
                <img className="item-img" src={element.img} alt=""/>
                <div className="item-slider-block">
                  
                  <Slider {...settings}>
                    <img className="slider-img" src={element.img} alt=""/>
                    <img className="slider-img" src={element.img} alt=""/>
                    <img className="slider-img" src={element.img} alt=""/>
                    <img className="slider-img" src={element.img} alt=""/>
                    <img className="slider-img" src={element.img} alt=""/>
                    <img className="slider-img" src={element.img} alt=""/>
                  
                  </Slider>
                </div>
              </div>
              
              <div className="item-info-block">
                <h2 className="item-name">Active Wear</h2>
                <span className="item-price">$25.00</span>
                <div className="ratings-block G-flex">
                  <div className="rating-stars">{renderStars(Math.round(element.rate))}</div>
                  <span className="rating-words">Rating <span className="rating">{element.rate}</span> | <span
                     className="comments">{element.info.comments} </span> Comments</span>
                
                </div>
                <p className="brand-prg">Brand: <span className="brand-span">{element.info.brand}</span></p>
                <span className="description-span">Description:</span>
                <p className="description-prg">{element.info.description}</p>
                <p className="available-color-prg">Avaliable Color: <span className="item-colors">{element.info.color}</span></p>
                <div className="specification-block">
                  <span className="specification-header">Specification:</span>
                  <ul className="specifications">
                    <li className="spec">Lorem ipsum dolor sit</li>
                    <li className="spec">Amet, consectetur</li>
                    <li className="spec">Adipiscing elit,set</li>
                    <li className="spec">Duis aute irure</li>
                    <li className="spec">Ut enim ad minim</li>
                    <li className="spec">Dolore magna aliqua</li>
                    <li className="spec">Excepteur sint</li>
                  
                  </ul>
                </div>
                <div className="size-quantity-block G-flex">
                  <div className="size-block G-flex">
                    <span className="size">Size : </span>
                    <button className="size-button">S</button>
                    <button className="size-button">M</button>
                    <button className="size-button">L</button>
                    <button className="size-button">XL</button>
                  </div>
                  
                  
                  <div className="size-block G-flex">
                    <span className="quantity">Quantity</span>
                    <button className="size-button">-</button>
                    <span className="quant">1</span>
                    <button className="size-button">+</button>
                  </div>
                </div>
                <div className="buttons-block G-flex G-flex-between">
                  <button className="button">Buy</button>
                  <button className="button">Add to Cart</button>
                </div>
              </div>
            </div>
         );
       })}
     </div>
  );
}

export default SItem;
