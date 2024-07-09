import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contactinfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <FaEnvelope />
        <span className="tooltip">huydavidpham@hotmail.com</span>
      </div>
      <div className="info-item">
        <FaPhone />
        <span className="tooltip">+416-276-3789</span>
      </div>
      <div className="info-item">
        <FaTwitter />
        <span className="tooltip">@hwehuy</span>
      </div>
      <div className="info-item">
        <FaInstagram />
        <span className="tooltip">@hwe.huy</span>
      </div>
      <div className="info-item">
        <FaLinkedin />
        <span className="tooltip">/in/huydpham/</span>
      </div>
    </div>
  );
};

export default ContactInfo;