import React from "react";
import "./featured-product.scss";
import {FeaturProdData} from "./featurProdData";

function FeaturedProduct() {
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  
  return (
     <div className="featured-product-block">
       <h2 className="featured-h2">Featured Product</h2>
       <p className="featured-prg">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.</p>
       <div className="featured-items">
         {FeaturProdData.map((element) => {
           return (
              <div className="feature-item G-container" key={element.id}>
                <img className="item-img" src={element.img} alt=""/>
                <div className="rate-price G-flex G-flex-between">
                  <div className="star-block">{renderStars(element.rate)}</div>
                  <span className="price">{element.price}</span>
                </div>
                <h2 className="ft-h2">{element.name}</h2>
                <p className="ft-prg">{element.description}</p>
                <span className="ft-reviews">Reviews ({element.reviews})</span>
              </div>
           );
         })}
       </div>
     </div>);
}

export default FeaturedProduct;