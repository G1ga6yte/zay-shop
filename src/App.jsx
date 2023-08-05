import React from "react";
import './App.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./footer";


function App() {

    return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element ={<About/>}/>
        </Routes>
        <Footer />
        
    </div>

  );

}

export default App;
