import React from "react";
import "./related-products.scss";
import Slider from "react-slick";
import {ShopData} from "../../shop/shop-categories/itemsData";
import {Link} from "react-router-dom";

function RelatedProducts (){
  const settings = {
    dots          : true,
    infinite      : true,
    speed         : 1500,
    slidesToShow  : 4,
    slidesToScroll: 4,
    arrows        : true,
    autoplay      : true,
    autoplaySpeed : 3000,
  };
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  
  return(
     <div className="related-products-block G-container">
        <h2 className="related-products-header">Related Products</h2>
        <div className="related-products-slider">
            <Slider {...settings}>
              {ShopData.map((element) => {
                return (
                   <div className="item" key={element.id}>
                     <div className="item-img">
                       <img className="img" src={element.img} alt=""/>
                       <div className="hover-content">
                         <Link to="/shopitem" className="content-items icon-heart"></Link>
                         <Link to="/shopitem" className="content-items icon-eye"></Link>
                         <Link to="/shopitem" className="content-items icon-cart-plus"></Link>
                       </div>
                     </div>
                     <div className="item-info-block">
                       <Link to="/shopItem" className="item-name">{element.name}</Link>
                       <span className="item-sizes">{element.sizes}</span>
                       <div className="item-stars">{renderStars(element.rate)}</div>
                       <span className="item-price">{element.price}</span>
                     </div>
                   </div>);
              })}
            </Slider>
        </div>
     </div>
  )
}

export default RelatedProducts