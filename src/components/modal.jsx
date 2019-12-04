import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faThumbsUp, faAngleDoubleLeft  } from '@fortawesome/free-solid-svg-icons'
import '../styles/modal.scss';

const modals = {
  continueShopping: ({ click }) => (
    <div class="modal-div">
      <span className="check"><FontAwesomeIcon icon={faCheckCircle}/></span>
      <h2>added successfully to cart</h2>
      <div>
        <button onClick={()=>click(1)}>
          <span>
            <FontAwesomeIcon icon={faAngleDoubleLeft}/>
          </span>
          Continue Shopping?
        </button>
        <button onClick={()=>click(0)}>
          Proceed to Checkout
          <span>
            <FontAwesomeIcon icon={faThumbsUp}/>
          </span>
        </button>
      </div>
    </div>
  ),
  checkout: ({ price, click }) => (
    <div class="checkout-div">
      <h2>Total</h2>
      <h4>{price}</h4>
      <button onClick={()=>click(3)}>Pay</button>
    </div>
  ),

  thankyou: () => (
    <div className="thank-you">
      <h1>Thank you!</h1>
      <h4>Payment Successful</h4>
    </div>
  )
}

const Modal = ({ modal, data }) => (
  <div className="modal">
    <div className="modal-content">
      {modals[modal](data)}
    </div>
  </div>
)

export default Modal;

// TODO: add method to closeModal