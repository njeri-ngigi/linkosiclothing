import React from 'react';
import '../styles/footer.scss';

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
        <a href="https://www.instagram.com/linkosiclothing/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Youtube</p>
        <p>Pinterest</p>
      </div>
    </div>
    <p className="designer">designed by <a href="https://www.twitter.com/nj3ry" target="_blank" rel="noopener noreferrer">@nj3ry</a></p>
  </div>
);

export default footer;


// Customized Tees