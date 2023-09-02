import React from "react";
import {useState} from "react";
import "./shop-categories-block.scss"

function ShopCategoriesBlock() {
  const [category, setCategory] = useState(null);
  
  
  const categoryList = [{
    id: 1, title: "Gender", product1: "Men", product2: "Woman", // product3: null
  }, {
    id: 2, title: "Sale", product1: "Sport", product2: "Luxury", // product3: null
  }, {
    id: 3, title: "Product", product1: "Bag", product2: "Sweater", product3: "Sunglass",
  }];
  
  function toggleCategory(categoryID) {
    if (category === categoryID) {
      setCategory(null);
    } else {
      setCategory(categoryID);
    }
  }
  
  
  return (
       <div className="categories-block">
         <h2 className="categories-h2">Categories</h2>
         {categoryList.map((element) => {
           let x = category === element.id;
           return (
              <div className="category gender-categories" key={element.id}>
                <div className="category-name-button gender G-flex G-flex-between" onClick={() => {
                  toggleCategory(element.id);
                }}>
                  <h3 className="category-name gender-h3">{element.title}</h3>
                  <button className="category-button">
                    <div className={`button-arrow ${x ? "arrow-rotated" : ""}`}></div>
                  </button>
                </div>
                
                <div className={x ? "category-items G-flex" : "items-closed category-items G-flex"}>
                  {element.product1 && <span className="items">{element.product1}</span>}
                  {element.product2 && <span className="items">{element.product2}</span>}
                  {element.product3 && <span className="items">{element.product3}</span>}
                </div>
              </div>
           );
         })}
       </div>
  );
}

export default ShopCategoriesBlock;