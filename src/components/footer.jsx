import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialUrls from '../utils/socialUrls';
import '../styles/footer.scss';

const socialIcons = () => socialUrls.map(({ url, icon, text }) => (
  <span className="social-icons">
    <span><FontAwesomeIcon icon={icon}/></span>
    <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  </span>
))

const footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="column help">
        <h5>HOW CAN WE HELP?</h5>
        <p>Contact Us</p>
        <p>FAQs</p>
      </div>
      <div className="column">
        <h5>How can we help?</h5>
      </div>
      <div className="column">
        <h5>FIND US</h5>
        {socialIcons()}
      </div>
    </div>
    <p className="designer">designed by <a href="https://www.twitter.com/nj3ry" target="_blank" rel="noopener noreferrer">@nj3ry</a></p>
  </div>
);

export default footer;


// Customized Tees