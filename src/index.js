import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./assets/svgs/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
     <App/>
   </BrowserRouter>,
);
