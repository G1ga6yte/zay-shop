import {useState} from "react";
import "./shop-categories.scss";
import {ShopData} from "./itemsData";
import {Link} from "react-router-dom";
import {useCartContext} from "../../../CartContext";
import ImageModal from "./image-modal";



function ShopCategories() {
  
  const [category, setCategory] = useState(null);
  const [gender, setGender] = useState(null);
  const [sort, setSort] = useState("AtoZ");
  const [image, setImage] = useState(null);
  
  
  const {addToCart, open, handleOpen} = useCartContext();
  
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
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  
  let data = ShopData;
  if (gender === null) {
    data = ShopData;
  } else if (gender === true) {
    data = ShopData.filter(item => item.gender === "male");
  } else if (gender === false) {
    data = ShopData.filter(item => item.gender === "female");
  }
  
  
  
  return (
     <div className="shop-categories G-container G-flex G-flex-between">
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
       
       <div>
         <ImageModal img={image}/>
       </div>
       
       <div className="shop-items-cont">
         
         
         <div className="shop-items-categories G-flex G-flex-between">
           <div className="gender-block">
             <span onClick={() => {
               setGender(null);
             }} className="gender-link">All</span>
             <span onClick={() => {
               setGender(true);
             }} className="gender-link">Men's</span>
             <span onClick={() => {
               setGender(false);
             }} className="gender-link">Women's</span>
           </div>
           <select onChange={(event) => {
             setSort(event.target.value);
           }} value={sort} className="shop-selection-block">
             <option value="AtoZ" className="select-option">A to Z</option>
             <option value="LowToHigh" className="select-option">Low to High</option>
             <option value="HighToLow" className="select-option">High to Low</option>
           </select>
         </div>
         
         <div className="shop-items-block G-flex G-flex-between">
           
           {
             data.sort((a, b) => {
                  if (sort === "AtoZ") {
                    return a.name.localeCompare(b.name);
                  } else if (sort === "LowToHigh") {
                    return a.sum - b.sum;
                  } else if (sort === "HighToLow") {
                    return b.sum - a.sum;
                  }
                })
                .map((element) => {
                  return (
                     
                     <div className="item" key={element.id}>
                       <div className="item-img">
                         <img className="img" src={element.img} alt=""/>
                         <div className="hover-content">
                           <Link to={`/shopitem/${element.id.toString()}`} className="content-items icon-heart"></Link>
                           <span onClick={() => {
                             handleOpen()
                             setImage(element.img);
                           }} className="content-items icon-eye"></span>
                           <span className="content-items icon-cart-plus " onClick={() => addToCart(element)}></span>
                         </div>
                       </div>
                       <div className="item-info-block">
                         <Link to="/shopItem" className="item-name">{element.name}</Link>
                         <span className="item-sizes">{element.sizes}</span>
                         <div className="item-stars">{renderStars(Math.round(element.rate))}</div>
                         <span className="item-price">{element.price}</span>
                       </div>
                     </div>);
                })
           }
         
         </div>
         
         <div className="shop-block-pages"></div>
       
       </div>
     </div>);
}

export default ShopCategories;