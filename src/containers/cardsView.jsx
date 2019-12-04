import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { mensItems, womensItems, kidsTeensItems, newItems } from '../utils/imageObjects';
import Card from '../components/cards/card';
import Footer from '../components/footer';
import '../styles/cardsView.scss'

const items = {
  men: mensItems,
  women: womensItems,
  teens_kids: kidsTeensItems,
  new: newItems
};

class CardsView extends Component {

  render() {
    const { pathName } = this.props.match.params;
    const item = items[pathName];
    const cards = item.map((item, index) => <Card key={`card-view-${index}`} details={item} />)
    return (
      <div>
        <Navbar/>
        <div className="cards-view">
          <div className="cards-view-div">
            {cards}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default CardsView;