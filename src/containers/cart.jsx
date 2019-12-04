import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/cart.scss';
import Modal from '../components/modal';
import FloatingCart from '../components/floatingCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    const { details } = this.props.location.state;
    const parsedDetails = JSON.parse(details);
    const { imageUrls, price, description } = parsedDetails;

    this.state = {
      imageUrls,
      imageUrl: imageUrls[0],
      price,
      description,
      imagePosition: 0,
      isAdded: false,
      viewModal: false,
      defaultModal: 'continueShopping', 
      itemsInCart: 0
    }
  }

  nextImage = () => {
    console.log("clicked>>>")
    const { imageUrls, imagePosition } = this.state;
    const newPosition = imagePosition + 1 >= imageUrls.length ? 0 : imagePosition + 1; 
    console.log(newPosition)
    this.setState({ 
      imageUrl: imageUrls[newPosition], 
      imagePosition: newPosition
    });
  }

  addItemToCart = () => {
    const { itemsInCart } = this.state;
    if (itemsInCart < 1) this.setState({ isAdded: true, viewModal: true })
  }

  checkout = (isCheckout) => {
    switch(isCheckout) {
      case 0:
        this.setState({ defaultModal: 'checkout' })
        break;

      case 1:
        const { itemsInCart } = this.state;
        this.setState({ viewModal: false, itemsInCart: itemsInCart + 1 })
        // this.props.history.push('/designs/new')
        break;

      case 3:
        this.setState({ defaultModal: 'thankyou' })
        setTimeout(() => {
          this.setState({ viewModal: false })
          setTimeout(() => this.props.history.push('/designs/new'), 1000);
        }, 3000);
        break

      default:
        return;
    }
  }

  render() {
    const { imageUrl, imageUrls, price, description, isAdded, defaultModal, viewModal, itemsInCart } = this.state;
    console.log(price)
    const buttonText = isAdded ? 'Added to Cart' : 'Buy';
    const buttonClass = isAdded ? 'bought' : 'not-bought';
    return (
      <>
      { viewModal && <Modal modal={defaultModal} data={{click: this.checkout, price: this.state.price}}/> }
      { itemsInCart > 0 && <FloatingCart count={itemsInCart}/> }
      <Navbar/>
      <div className="cart">
        <div className="cart--image-container">
          { imageUrls.length > 1 && <div className="next-icon">
            <span onClick={this.nextImage}>
              <FontAwesomeIcon icon={faAngleRight}/>          
            </span>
          </div>}
          <div className="cart--image">
            <img src={imageUrl} alt={description}/>
          </div>
        </div>
        
        <div className="cart--checkout">
          <p>{price}</p>
          <button className={buttonClass} onClick={this.addItemToCart}>{buttonText}</button>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
};

// TODO: Add method to clear cart

export default Cart;