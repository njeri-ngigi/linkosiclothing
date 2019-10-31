import React from 'react';
import Card from './card';
import clothItems from '../../utils/imageObjects';

const cards = () => {
  const cardsList = clothItems.map((item, index)=><Card key={`card-${index}`} details={item}/>)

  return <div className="cards">{cardsList}</div>
};

export default cards;
