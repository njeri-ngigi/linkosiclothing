import React from 'react';
import FirstRow from './fisrtRowCards';
import MoreCards from './moreCards';
import { womensItems, mensItems } from '../../utils/imageObjects';

const NewTitle = () => (
  <div className="cards-title">
    <span></span>
    <span>WHAT'S NEW?</span>
  </div>
)

const cards = () => (
  <div className="cards">
    <NewTitle/>
    <FirstRow/>
    <MoreCards imageObjects={womensItems} title="WOMEN"/>
    <MoreCards imageObjects={mensItems} title="MEN"/>
  </div>
);

export default cards;
