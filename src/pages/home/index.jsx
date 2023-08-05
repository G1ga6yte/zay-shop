import React from 'react';
import {dataD} from "./header-slide/slide-data";
import Categories from "./categories";
import SliderCont from "./header-slide";
import FeaturedProduct from "./featured-product";

const Home = () => {
    return (
        <div className="Home-cont">
            <SliderCont />
            <Categories/>
            <FeaturedProduct />
        </div>
    );
};

export default Home;
