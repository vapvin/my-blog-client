import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <App className="box-border" />
  </React.StrictMode>,
  document.getElementById("root")
);
