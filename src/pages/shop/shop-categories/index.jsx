import React, {useState}  from "react";
import "./shop-categories.scss";



function ShopCategories() {
  const categoryList = [
    {
      id      : 1,
      title   : "Gender",
      product1: "Men",
      product2: "Woman",
      // product3: null
    },
    {
      id      : 2,
      title   : "Sale",
      product1: "Sport",
      product2: "Luxury",
      // product3: null
    },
    {
      id      : 3,
      title   : "Product",
      product1: "Bag",
      product2: "Sweater",
      product3: "Sunglass",
    },
  ];
  
  let [count, setCount] = useState(false)
  
  
  
  return (
     <div className="shop-categories G-container">
       <div className="categories-block">
         <h2 className="categories-h2">Categories</h2>
         
         {categoryList.map((element) => {
           
           
           return (
              
              <div className="category gender-categories" key={element.id}>
                <div className="category-name-button gender G-flex G-flex-between" onClick={()=>{setCount(!count)}}>
                  <h3 className="category-name gender-h3">{element.title}</h3>
                  <button className="category-button" >
                    <div className="button-arrow"></div>
                  </button>
                </div>
                
                <div className={count ? "category-items G-flex": "items-closed category-items G-flex"}>
                  <span className="items">{element.product1}</span>
                  <span className="items">{element.product2}</span>
                  <span className="items">{element.product3}</span>
                </div>
              </div>
  
           
           );
           
         })}
       
       </div>
       <div className="shop-items-block">
       
       </div>
     </div>
  );
}

export default ShopCategories;