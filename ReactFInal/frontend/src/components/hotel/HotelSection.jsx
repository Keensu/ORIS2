import React from 'react';

const HotelSection = ({ title, content }) => {
  return (
    <>
      <h3 className="section-title">{title}</h3>
      <div className={`section-content ${title === 'Расположение' ? 'location-details' : title === 'Контакты' ? 'contacts' : title === 'Примечание' ? 'note' : ''}`}>
        {content}
      </div>
    </>
  );
};

export default HotelSection;