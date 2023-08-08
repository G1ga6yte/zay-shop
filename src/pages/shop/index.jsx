import React from 'react';
import BrandSlide from "../about/brand-slide";
import ShopCategories from "./shop-categories";

const Shop = () => {
    return (
        <div className="shop-cont">
          <ShopCategories/>
          <BrandSlide/>
        </div>
    );
};

export default Shop;
