import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contactinfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <FaEnvelope />
        <span className="tooltip">your.email@example.com</span>
      </div>
      <div className="info-item">
        <FaPhone />
        <span className="tooltip">+123 456 7890</span>
      </div>
      <div className="info-item">
        <FaTwitter />
        <span className="tooltip">@yourtwitterhandle</span>
      </div>
      <div className="info-item">
        <FaInstagram />
        <span className="tooltip">@yourinstagramhandle</span>
      </div>
      <div className="info-item">
        <FaLinkedin />
        <span className="tooltip">yourlinkedinprofile</span>
      </div>
    </div>
  );
};

export default ContactInfo;