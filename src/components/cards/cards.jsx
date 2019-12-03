import React from 'react';
import FirstRow from './fisrtRowCards';
import { MoreCardsFirstRow, MoreCardsSecondRow } from './moreCards';
import { womensItems, mensItems, kidsTeensItems } from '../../utils/imageObjects';

const NewTitle = () => (
  <div className="cards-title">
    <div>
      <span></span>
      <span>WHAT'S NEW?</span>
    </div>
    <div></div>
  </div>
)

const cards = () => (
  <div className="cards">
    <NewTitle/>
    <FirstRow/>
    <MoreCardsFirstRow imageObjects={womensItems} title="WOMEN"/>
    <MoreCardsSecondRow imageObjects={mensItems} title="MEN"/>
    <MoreCardsSecondRow imageObjects={kidsTeensItems} title="TEENS & KIDS"/>
  </div>
);

export default cards;
