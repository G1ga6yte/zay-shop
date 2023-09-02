import React, {createContext, useContext, useEffect, useState} from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([]);
  const [sum, setSum] = useState(0);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  
 
  
  
  const countAdd = (item) => {
    const updatedItems = cartItem.map((cartItem) => cartItem.id === item.id ? {
      ...cartItem,
      count: cartItem.count + 1,
    } : cartItem);
    setCartItem(updatedItems);
  };
  
  const countMin = (item) => {
    const updatedItems = cartItem.map((cartItem) => cartItem.id === item.id && cartItem.count > 1 ? {
      ...cartItem, count: cartItem.count - 1,
    } : cartItem);
    setCartItem(updatedItems);
  };
  
  const addToCart = (item) => {
    let savedData = cartItem.find((cartItem) => cartItem.id === item.id);
    if (savedData) {
      const updatedItems = cartItem.map((cartItem) => cartItem.id === savedData.id ? {
        ...cartItem, count: cartItem.count + 1,
      } : cartItem);
      setCartItem(updatedItems);
    } else {
      setCartItem((prevItem) => [...prevItem, {...item, count: 1}]);
    }
    item.check = false;
  };
  
  const removeFromCart = value => {
    setCartItem((prevItem) => {
      const updatedItems = prevItem.filter(itemID => itemID.id !== value);
      // localStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  const itemCheck = (item) => {
    if (item.check === false) {
      item.check = true;
      setSum(sum + item.sum);
      
    } else if (item.check === true) {
      item.check = false;
      setSum(sum - item.sum);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openDialog, setDialogOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
    let summa = 0;
    cartItem.map((item) => {
      if (item.check) {
        summa += (item.count * item.sum);
      }
    });
    setSum(summa);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const cartCount = cartItem.length;
  
  useEffect(() => {
    const save = localStorage.getItem("cart");
    if (save) {
      setCartItem(JSON.parse(save));
    }
    
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [addToCart, removeFromCart]);
  

  
  return (<CartContext.Provider value={{
    addToCart,
    cartCount,
    cartItem,
    itemCheck,
    removeFromCart,
    sum,
    handleOpen,
    handleClose,
    open,
    openDialog,
    handleDialogOpen,
    handleDialogClose,
    countAdd,
    countMin,
    image,
    setImage,
  }}>
    {children}
  </CartContext.Provider>);
};


export const useCartContext = () => {
  return useContext(CartContext);
};