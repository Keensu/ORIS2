import React from 'react';

const BookingSection = ({ buttonText, buttonLink }) => {
  return (
    <div className="booking-section">
      <a href={buttonLink} className="booking-button">{buttonText}</a>
    </div>
  );
};

export default BookingSection;