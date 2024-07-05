import React from 'react';
import './tothetop.css';

function Tothetop() {
  return (
    <div className="ttt-page">
      <h1>To The Top!</h1>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/sW1HYObzLns"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Tothetop;
