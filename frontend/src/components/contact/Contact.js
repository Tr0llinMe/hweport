import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialMediaFeed from './SocialMediaFeed';
import AnimatedBackground from './AnimatedBackground';
import './ContactPage.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <AnimatedBackground />
      <div className="content">
        <ContactForm />
        <ContactInfo />
        <SocialMediaFeed />
      </div>
    </div>
  );
}

export default Contact;
