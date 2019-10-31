import React from "react";
import "../styles/navbar.scss";
import Navbar from "./navbar";

const header = () => (
  <div className="header">
    <Navbar/>
    <div className="bg-image"></div>
    <div className="collections">
      <h1 className="collection-type">URBAN COLLECTION</h1>
      <button>SHOP</button>
    </div>
  </div>
);

export default header;
