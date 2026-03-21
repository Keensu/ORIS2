import React from 'react';

const HotelDescription = ({ rating, ratingText, reviews, description, priceFrom, priceValue, pricePeriod }) => {
  return (
    <div className="description">
      <div className="rating-container">
        <span className="rating-value">{rating}</span>
        <span className="rating-max">/5</span>
        <div className="rating-text">{ratingText}</div>
        <a href="#" className="rating-reviews">{reviews}</a>
      </div>
      <div className="description-text">
        <p>{description}</p>
      </div>
      <div className="hotel-price-badge">
        <span className="price-from">{priceFrom}</span>
        <span className="price-value">{priceValue}</span>
        <span className="price-period">{pricePeriod}</span>
      </div>
    </div>
  );
};

export default HotelDescription;