import {useCartContext} from "../../CartContext";
import "./cartItems.scss";
import CustomizedDialogs from "./dialog-page";

function Cart() {
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  
  const {cartItem, removeFromCart, itemCheck, handleDialogOpen, countAdd, countMin} = useCartContext();
  
  
  return (
     <div className="cart-block G-flex">
       
       
       <CustomizedDialogs/>
       
       
       <div className="items-cont G-container G-flex">
         {cartItem.map((element) => {
           return (
              <div className="cart-item-block G-container G-flex G-flex-between">
                
                <div className="img-block">
                  <img className="item-img" src={element.img} alt=""/>
                </div>
                
                <div className="name-desc">
                  <h2 className="item-name">{element.name}</h2>
                  <p className="item-description">{element.info.description}</p>
                  <div className="rating-brand-color G-flex">
                    <div className="rating-block">{renderStars(Math.round(element.rate))}</div>
                    <span className="item-brand">{element.info.brand}</span>
                    <span className="item-color">{element.info.color}</span>
                    <div className="counting-block G-flex">
                      <button onClick={()=> countMin(element)} className="">-</button>
                      <span>{element.count}</span>
                      <button onClick={()=>countAdd(element)} className="">+</button>
                    </div>
                  </div>
                </div>
                
                <div className="options-block">
                  <span className="item-price">{element.price}</span>
                  <div className="button-checkbox-block G-flex">
                    <button onClick={() => {
                      removeFromCart(element.id);
                    }} className="delete-button">Remove
                    </button>
                    <input onClick={() => {
                      itemCheck(element);
                    }} className="item-checkbox" type="checkbox"/>
                  </div>
                  <button className="buy-item-now"><span className="icon-shopping-basket"></span> Buy Now</button>
                </div>
              
              </div>
           );
         })}
         
         
         <button onClick={handleDialogOpen} className="buy-button"><span className="icon-shopping-basket"></span>Buy
         </button>
       </div>
     </div>
  );
}

export default Cart;