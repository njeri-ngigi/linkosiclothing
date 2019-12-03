import React from 'react';
import { newItems } from '../../utils/imageObjects';

const createRows = (first=true, url, description) => {
  const firstRow = <div className="col-2-img" key={`image-${first}`}><img src={url} alt={description}/></div>;
  const secondRow = <div className="col-2-description" key={`description-${first}`}><p>Urban Camo</p></div>
  return first ? [firstRow, secondRow] : [secondRow, firstRow]
}

const ImageCard = ({ url, description, first }) => {
  const rows = createRows(first, url, description);
  return (<div className="cards--first-row-column-2-image">{rows}</div>)
}

const FirstImage = () => (
  <div className="cards--first-row-column-1-image">
      <div className="col-1-img">
        <img src={newItems[0].imageUrls[0]} alt={newItems[0].description}/>
      </div>
      <p className="col-1-description">{newItems[0].description}</p>
  </div>
)

const firstRow = () => (
  <div className="cards--first-row">
    <div className="cards--first-row-column-1">
      <FirstImage/>
    </div>
    <div className="cards--first-row-column-2">
      <ImageCard url={newItems[1].imageUrls[0]} description={newItems[1].description}/>
      <ImageCard url={newItems[2].imageUrls[0]} description={newItems[2].description} first={false}/>
    </div>
  </div>
)

export default firstRow;

