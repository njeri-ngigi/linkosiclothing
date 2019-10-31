import React, { Component } from 'react';
import '../../styles/cards.scss';


class Card extends Component {
  state = {
    imageIndex: 0
  }

  handleClick(arraySize) {
    let index = this.state.imageIndex;
    index++;
    if (index >= arraySize) index = 0;
    this.setState({ imageIndex: index })
  }

  render() {
    const { details } = this.props;
    const { imageUrls, price, description } = details;

    return (
      <div className="card">
        <div className="image">
          <img src={imageUrls[this.state.imageIndex]} alt={description}/>
          <p className="price">{price}</p>
          { 
            imageUrls.length > 1 && 
            <span className="next-image" onClick={() => this.handleClick(imageUrls.length)}>&#8250;</span>
          }
        </div>
        <div className="description-container">
          <div className="description">
            <div className="sample-image">
              <img  src={imageUrls[0]} alt={description}/>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
