import React from 'react';
import '../../assets/styles/DestinationBlock.css';

const DestinationBlock = ({ city, count, image, hotels }) => {
  return (
    <div className="dest_row">
      <div className="photo" style={{ backgroundImage: `url('${image}')` }}>&nbsp;</div>
      <div className="title"><a href="#">{city} ({count})</a></div>
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel">
          <div>
            <a href={hotel.link} rel="nofollow">{hotel.name}</a>
            <span> » от {hotel.price} руб.</span>
          </div>
        </div>
      ))}
      <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
    </div>
  );
};

export default DestinationBlock;