import "./shop-categories.scss";
import ImageModal from "./image-modal";
import ShopItemsBlock from "./shop-items-block";
import ShopCategoriesBlock from "./shop-categories-block";
import {useCartContext} from "../../../CartContext";


function ShopCategories() {
  const {image} = useCartContext()
  
  
  return (
     <div className="shop-categories G-container G-flex G-flex-between">
       <ShopCategoriesBlock/>
       
       <ImageModal img={image}/>
       
       <ShopItemsBlock/>
     </div>);
}

export default ShopCategories;