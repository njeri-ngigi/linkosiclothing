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

const mixCards = (imageObjects) => (
  <div className="mixCards">
    <Card details={imageObjects[0]}/>
    <div>
      <Card details={imageObjects[1]}/>
      <Card details={imageObjects[2]}/>
    </div>
    <Card details={imageObjects[3]}/>
  </div>
);

const displayCards = (imageObjects) => (
  imageObjects.length > 3 ? mixCards(imageObjects) : cards(imageObjects)
)
const MoreCardsFirstRow = ({ imageObjects, title }) => (
  <div className="cards--second-row">
    <div className="card-links">
      <p>{title}</p>
    </div>
    <div className="card-images">
      {displayCards(imageObjects)}
      {imageObjects.length > 4 && more()}
    </div>
  </div>
)

const MoreCardsSecondRow = ({ imageObjects, title }) => (  
  <div className="cards--second-row">
    <div className="card-links">
      <p>{title}</p>
    </div>
    <div className="card-images">
      {cards(imageObjects)}
      {imageObjects.length > 4 && more()}
    </div>
  </div>
)

export { MoreCardsFirstRow, MoreCardsSecondRow };
