import React from 'react';
import { Link } from 'react-router-dom';
import { newItems } from '../../utils/imageObjects';

const createRows = (first=true, url, description, details) => {
  const firstRow = 
    <div className="col-2-img" key={`image-${first}`}>
      <Link 
        to={{
          pathname: '/cart',
          state: {
            details: JSON.stringify(details)
          }
        }}>
        <img src={url} alt={description}/>
      </Link>
    </div>;
  const secondRow = <div className="col-2-description" key={`description-${first}`}><p>Urban Camo</p></div>
  return first ? [firstRow, secondRow] : [secondRow, firstRow]
}

const ImageCard = ({ details, url, description, first }) => {
  const rows = createRows(first, url, description, details);
  return (<div className="cards--first-row-column-2-image">{rows}</div>)
}

const FirstImage = () => (
  <div className="cards--first-row-column-1-image">
    <Link
      to={{
        pathname: '/cart',
        state: {
          details: JSON.stringify(newItems[0])
        }
      }}>
      <div className="col-1-img">
        <img src={newItems[0].imageUrls[0]} alt={newItems[0].description}/>
      </div>
    </Link>
    <p className="col-1-description">{newItems[0].description}</p>
  </div>
)

const firstRow = () => (
  <div className="cards--first-row">
    <div className="cards--first-row-column-1">
      <FirstImage/>
    </div>
    <div className="cards--first-row-column-2">
      <ImageCard details={newItems[1]} url={newItems[1].imageUrls[0]} description={newItems[1].description}/>
      <ImageCard details={newItems[2]} url={newItems[2].imageUrls[0]} description={newItems[2].description} first={false}/>
    </div>
  </div>
)

export default firstRow;

