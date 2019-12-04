import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cards.scss';

const card = ({ details }) => {
  const { imageUrls: [imageUrl], description, price } = details;
  console.log('>>>>', `${window.location.origin}/${imageUrl}`)
  return (
  <Link
    to={{
      pathname: '/cart',
      state: {
        details: JSON.stringify(details)
      }
    }}>
    <div className="card">
      <div className="card-image">
        <img src={`${window.location.origin}/${imageUrl}`} alt={description}/>
      </div>
      <p className="price">{price}</p>
      <div className="image-description">
        <p>{description}</p>
      </div>
    </div>
  </Link>
  
)};

export default card;

// TODO: on hover show shopping cart on card
