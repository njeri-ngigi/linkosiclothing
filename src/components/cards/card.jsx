import React from 'react';
import '../../styles/cards.scss';

const card = ({ details: { imageUrls: [imageUrl], description, price } }) => (
  <div className="card">
    <div className="card-image">
      <img src={imageUrl} alt={description}/>
    </div>
    <p className="price">{price}</p>
    <div className="image-description">
      <p>{description}</p>
    </div>
  </div>
);

export default card;

// TODO: on hover show shopping cart on card
