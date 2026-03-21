import React from 'react';

const HotelHeader = ({ title, stars, location, metro, navButtons }) => {
  return (
    <div className="hotel-header">
      <div className="hotel-title-rating">
        <h1 className="hotel-title">{title}</h1>
        <div className="stars">
          <img src={stars} alt="3 звезды" width="64" height="12" className="png" />
        </div>
      </div>
      <div className="hotel-location">{location}</div>
      <div className="metro-info">{metro}</div>
      
      <div className="nav-buttons">
        {navButtons.map((button, index) => (
          <button key={index} className={`nav-button ${button.active ? 'active' : ''}`}>
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HotelHeader;