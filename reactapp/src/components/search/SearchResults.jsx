import React from 'react';
import HotelCard from '../hotel/HotelCard';

const SearchResults = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return <div className="no-results">Отели не найдены</div>;
  }

  return (
    <article className="hotels search-results">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </article>
  );
};

export default SearchResults;
