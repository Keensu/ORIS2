import React from 'react';
import HotelCard from '../hotel/HotelCard';

const CityHotels = ({ cityName, cityLink, links, hotels, bannerImage }) => {
  return (
    <>
      <a className="photo" aria-label="баннер" style={{ backgroundImage: `url('${bannerImage}')` }} href="#" rel="nofollow">&nbsp;</a>
      <div className="cityTitle"><a href="#" rel="nofollow">{cityName}</a></div>
      <div className="links" align="right">
        {links.map((link, index) => (
          <span key={index}>
            {index > 0 && ' - '}
            <a href="#" rel="nofollow">{link}</a>
          </span>
        ))}
      </div>
      <article className="hotels top">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </article>
    </>
  );
};

export default CityHotels;