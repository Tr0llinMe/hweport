import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import AnimatedBackground from './AnimatedBackground';

const Contact = () => {
  return (
    <div className="contact-page">
      <AnimatedBackground />
      <div className="content">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
