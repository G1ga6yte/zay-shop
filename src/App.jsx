import React, {useState} from "react";
import './App.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./footer";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import ShopItem from "./pages/shop-item";


function App() {
    

    return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/shopitem/:id" element={<ShopItem/>}/>
        </Routes>
        <Footer />
        
    </div>

  );

}

export default App;
