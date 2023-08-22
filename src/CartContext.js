import {useContext, useState, createContext} from "react";
import item from "./pages/shop-item/item";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItems, setCheckedItems] = useState([])
  const [sum, setSum] = useState(0)
  
  
  const addToCart = (item) => {
    setCartItem((prevItem) => [...prevItem, item]);
    item.check= false
  };
  
  const removeFromCart = value =>{
    setCartItem(newarr => {
      return newarr.filter(itemID => itemID.id !== value)
    })
  }
  
  
  
  const itemCheck = (item) => {
    if (item.check === false) {
      item.check = true
      setSum(sum + item.sum)
      setCheckedItems((prevItem)=>[... prevItem, item])
      
    } else if (item.check === true) {
      item.check= false
      setSum(sum-item.sum)
      setCheckedItems( checkout =>{
        return checkout.filter(itemID => itemID.id !== item.id)
      })
    }
  }
  
  
  
  
  const cartCount = cartItem.length;
  
  
  return (
     <CartContext.Provider value={{addToCart, cartCount, cartItem, itemCheck, removeFromCart, checkedItems, sum}}>
       {children}
     </CartContext.Provider>
  );
};


export const useCartContext = () => {
  return useContext(CartContext);
};