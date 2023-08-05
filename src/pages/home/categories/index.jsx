import React from "react";
import {categoriesData} from "./categoriesData";
import "./categories.scss"

function Categories() {
  return (
     <div className="Categories-cont G-container">
       <h2 className="categories-h2">Categories of The Month</h2>
       <p className="categories-prg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
         mollit anim id est laborum.</p>
       <div className="categories-block G-flex G-flex-between">
         {categoriesData.map((el, index) => {
           return <div id={index} className="categories-item" style={{width: "30%"}}>
                  <img className="item-img" src={el.url} width="100%" alt=""/>
                  <h3 className="item-name">{el.name}</h3>
                  <button className="go-shop-button">Go Shop</button>
           </div>;
         })}
       </div>
     </div>
  );
}

export default Categories;