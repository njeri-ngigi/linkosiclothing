import React from "react";
import "../styles/header.scss";


const header = () => (
  <div className="header">
    <div className="header-left">
      <div className="hl-col est">
        <p>EST 2018</p>
      </div>
      <div className="hl-col logo">
        <p> L & C</p>
      </div>
      <div className="hl-col nav">
        <div>
          <span> WHAT'S NEW </span>
          <span> MEN </span>
          <span> WOMEN </span>
          <span> TEENS </span>
          <span> KIDS </span>
        </div>
      </div>
    </div>
    <div className="header-abs image">
      <img src="images/linkosiclothing/camo-3.jpg" alt="urban camo"/>
    </div>
    <div className="header-abs line">
      <span></span>
    </div>
    <div className="header-right">
      <div>
        <h1> Urban<br/> Style</h1>
        <p>LINK & CLO</p>
      </div>
    </div>
  </div>
);

export default header;
