import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Card from './card';

const cards = (imageObjects) => (imageObjects.slice(0, 3)
  .map((item, index)=><Card key={`card-${index}`} details={item}/>))

const more = (designType) => (
  <div className="more-cards">
    <Link to={`/designs/${designType}`}>
      <p><FontAwesomeIcon icon={faAngleRight}/></p>
    </Link>
    <p>MORE ...</p>
  </div>
)

// const mixCards = (imageObjects) => (
//   <div className="mixCards">
//     <Card details={imageObjects[0]}/>
//     <div>
//       <Card details={imageObjects[1]}/>
//       <Card details={imageObjects[2]}/>
//     </div>
//     <Card details={imageObjects[3]}/>
//   </div>
// );

// const displayCards = (imageObjects) => (
//   imageObjects.length > 3 ? mixCards(imageObjects) : cards(imageObjects)
// )
const MoreCardsFirstRow = ({ imageObjects, title, type }) => (
  <div className="cards--second-row">
    <div className="card-links">
      <p>{title}</p>
    </div>
    <div className="card-images">
      {cards(imageObjects)}
      {imageObjects.length > 4 && more(type)}
    </div>
  </div>
)

const MoreCardsSecondRow = ({ imageObjects, title, type }) => (  
  <div className="cards--second-row">
    <div className="card-links">
      <p>{title}</p>
    </div>
    <div className="card-images">
      {cards(imageObjects)}
      {imageObjects.length > 4 && more(type)}
    </div>
  </div>
)

export { MoreCardsFirstRow, MoreCardsSecondRow };
