import React, {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [open, setOpen] = useState(false);
  
  
  const countAdd = (item) => {
    const updatedItems = cartItem.map((cartItem) =>
      cartItem.id === item.id ? {...cartItem, count: cartItem.count + 1} : cartItem
    );
    setCartItem(updatedItems);
  };
  const countMin = (item) => {
    const updatedItems = cartItem.map((cartItem) => cartItem.id === item.id && cartItem.count > 1 ? {
      ...cartItem,
      count: cartItem.count - 1,
    } : cartItem);
    setCartItem(updatedItems);
  };
  const addToCart = (item) => {
    let savedData = cartItem.find((cartItem) => cartItem.id === item.id);
    if (savedData) {
      const updatedItems = cartItem.map((cartItem) => cartItem.id === savedData.id ? {
        ...cartItem,
        count: cartItem.count + 1,
      } : cartItem);
      setCartItem(updatedItems);
    } else {
      setCartItem((prevItem) => [...prevItem, {...item, count: 1}]);
    }
    item.check = false;
    localStorage.setItem("cart", JSON.stringify([...cartItem, {...item, count: 1}]));
  };
  const removeFromCart = value => {
    setCartItem((prevItem) => {
      const updatedItems = prevItem.filter(itemID => itemID.id !== value);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  const itemCheck = (item) => {
    if (item.check === false) {
      item.check = true;
      setSum(sum + item.sum);
      setCheckedItems((prevItem) => [...prevItem, item]);
      
    } else if (item.check === true) {
      item.check = false;
      setSum(sum - item.sum);
      setCheckedItems(checkout => {
        return checkout.filter(itemID => itemID.id !== item.id);
      });
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openDialog, setDialogOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
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
  
  
  return (<CartContext.Provider value={{
       addToCart,
       cartCount,
       cartItem,
       itemCheck,
       removeFromCart,
       checkedItems,
       sum,
       handleOpen,
       handleClose,
       open,
       openDialog,
       handleDialogOpen,
       handleDialogClose,
       countAdd,
       countMin,
     }}>
       {children}
     </CartContext.Provider>);
};


export const useCartContext = () => {
  return useContext(CartContext);
};