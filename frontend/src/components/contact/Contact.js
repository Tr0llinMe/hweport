import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import AnimatedBackground from './AnimatedBackground';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <AnimatedBackground />
      <div className="content">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="contact-image">
        <img src="/images/contactform.png" alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
