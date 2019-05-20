import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div name="contact" className="contact-container">
      <div className="section-title">Contact</div>
      <div className="contact__links">
        <a href="https://www.linkedin.com/in/johnathangiang/"><div className="contact__linkedin">LinkedIn</div></a>
        <a href="https://github.com/jhoun"><div className="contact__github">Github</div></a>
        <a href="mailto:jayhgiang@gmail.com"><div className="contact__email">Email</div></a>
      </div>
    </div>
  );
};

export default Footer;
