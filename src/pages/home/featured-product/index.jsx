import React, {createElement} from "react";
import "./featured-product.scss";
import FeaturProdData from "./featurProdData";
import Try from "./try";

function FeaturedProduct() {
  return (
     <div className="featured-product-block">
       <h2 className="featured-h2">Featured Product</h2>
       <p className="featured-prg">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident.</p>
       <div className="featured-items">
         {FeaturProdData.map((el, index) => {
           return (
              <div className="feature-item G-container">
                <img className="item-img" src={el.img} alt=""/>
                <div className="rate-price G-flex G-flex-between">
                  <div className="star-block" dangerouslySetInnerHTML={{__html:el.rate}}></div> <span className="price">{ el.price}</span></div>
                <h2 className="ft-h2">{el.name}</h2>
                <p className="ft-prg">{el.description}</p>
                <span className="ft-reviews">Reviews ({el.reviews})</span>
              </div>
           );
         })}
       </div>
     </div>
  );
}

export default FeaturedProduct;