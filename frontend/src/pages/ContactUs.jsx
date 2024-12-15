import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Reach out to us anytime! We're here to help you improve parking security and
        efficiency.
      </p>
      <div className="contact-us__info">
        <p>Email: <a href="mailto:support@insight.com">support@insight.com</a></p>
        <p>Phone: +92 300 1234567</p>
      </div>
    </div>
  );
};

export default ContactUs;
