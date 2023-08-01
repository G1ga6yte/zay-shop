import React from "react";
import './App.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";


function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element ={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
