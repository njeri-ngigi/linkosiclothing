import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../styles/floatingCart.scss'

const FloatingCart = ({count}) => (
  <div className="floating-cart">
    <span className="count">{count}</span>
    <span className="floating-cart-span">
      <FontAwesomeIcon icon={faShoppingCart}/>
    </span>
  </div>
);

export default FloatingCart;
