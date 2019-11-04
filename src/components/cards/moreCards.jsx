import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Card from './card';

const cards = (imageObjects) => (imageObjects.slice(0, 3)
  .map((item, index)=><Card key={`card-${index}`} details={item}/>))

const more = () => (
  <div className="more-cards">
    <p><FontAwesomeIcon icon={faAngleRight}/></p>
    <p>MORE ...</p>
  </div>
)

const moreCards = ({ imageObjects, title }) => (
  <div className="cards--second-row">
    <div className="card-links">
      <p>{title}</p>
    </div>
    <div className="card-images">
      {cards(imageObjects)}
      {imageObjects.length > 2 && more()}
    </div>
  </div>
)

export default moreCards;
