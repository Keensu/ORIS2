import React from 'react';

const HotelPhoto = ({ src, alt }) => {
  return (
    <div className="photo-container">
      <img className="hotel-photo" src={src} alt={alt} />
    </div>
  );
};

export default HotelPhoto;