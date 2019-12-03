import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/cart.scss';

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
      imagePosition: 0
    }
  }

  nextImage = () => {
    const { imageUrls, imagePosition } = this.state;
    const newPosition = imagePosition + 1 >= imageUrls.length ? 0 : imagePosition + 1; 
    this.setState({ 
      imageUrl: imageUrls[imagePosition], 
      imagePosition: newPosition
    });
  }

  render() {
    const { imageUrl, imageUrls, price, description } = this.state;
    return (
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
          <button>Buy</button>
        </div>
      </div>
    )
  }
};

export default Cart;