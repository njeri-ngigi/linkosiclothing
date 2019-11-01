import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "../styles/header.scss";


const header = () => (
  <div className="header">
    <div className="header__social--icons">
      <span><FontAwesomeIcon icon={faInstagram}/></span>
      <span><FontAwesomeIcon icon={faTwitter}/></span>
      <span><FontAwesomeIcon icon={faFacebook}/></span>
    </div>

    <div className="header__intro">
      <span className="header__span--abs"></span>
      <h1>Links & Clo</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
      </p>
      <div class="header__intro--div--arrow">
        <p class="header__intro--arrow"></p>
      </div>
      <button className="header__intro--whats--new">What's new</button>
    </div>

    <div className="header__images">
      <div className="header__images--1">
        <img src="images/linkosiclothing/black-dress.jpg" alt="urban camo"/>
      </div>
      <div className="header__images--2">
        <img src="images/linkosiclothing/camo-3.jpg" alt="urban camo"/>
      </div>
      <div className="header__images--3">
        <img src="images/linkosiclothing/sweats.jpg" alt="urban camo"/>
      </div>
    </div>
  </div>
);

export default header;
