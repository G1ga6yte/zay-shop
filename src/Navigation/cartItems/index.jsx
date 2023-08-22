import {useState} from "react";
import {useCartContext} from "../../CartContext";
import "./cartItems.scss";

function Cart() {
  
  const renderStars = (filled) => {
    const totalStar = 5;
    const stars = Array(totalStar).fill().map((_, index) => {
      const starClass = index < filled ? "filled" : "grey";
      return <span key={index} className={`icon-star ${starClass}`}></span>;
    });
    return stars;
  };
  
  const {cartItem} = useCartContext();
  const {removeFromCart} = useCartContext();
  const {itemCheck} = useCartContext();
  const {checkedItems} = useCartContext();
  const {sum} = useCartContext()
  
  let [buyPage, setBuyPage] = useState(false);
  
  
  function toggleShop() {
    if (buyPage === true) {
      setBuyPage(false);
      window.onscroll = ()=>{}
    } else {
      setBuyPage(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(()=>{window.onscroll = function () { window.scrollTo(0, 0); };}, 1000)
    }
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (buyPage === true) {
        toggleShop();
      }
    }
  });
  
  return (
     <div className="cart-block G-flex">
       
       <div className={`buy-page ${buyPage ? "disp-on" : ""}`}>
         <div className="buy-block G-flex">
            <div onClick={toggleShop} className="close-button icon-cancel"></div>
           <div className="paying-types G-flex G-flex-between">
              <span className="pay-icon icon-cc-paypal"></span>
             <span className="pay-icon icon-googlepay"></span>
             <span className="pay-icon icon-applepay"></span>
             <span className="pay-icon icon-credit-card"></span>

           </div>
           <div className="checked-items G-flex">
             {checkedItems.map((el)=>{
               return <div className="checked-item G-flex G-flex-between">
                 <img className="checked-item-img" src={el.img} alt=""/>
                 <div className="item-name-color G-flex">
                    <h3 className="checked-item-name">{el.name}</h3>
                    <span className="checked-item-color">{el.info.color}</span>
                 </div>
                 <span className="checked-item-price">
                   {el.price}
                 </span>
               </div>
             })}
           </div>
           
           <div className="item-price">
              Total Sum : <span className="price-span">${sum}.00</span>
           </div>
           <button className="go-to-pay">
              Go To Pay
           </button>
         </div>
       </div>
       
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
         
         
         <button onClick={toggleShop} className="buy-button"><span className="icon-shopping-basket"></span>Buy</button>
       </div>
     </div>
  );
}

export default Cart;