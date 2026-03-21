import React, { useState, useEffect } from 'react';
import DestinationBlock from './DestinationBlock';

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('/api/hotels.json')
      .then(response => response.json())
      .then(data => setDestinations(data.destinations))
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  return (
    <>
      <div className="h1">Популярные Направления</div>
      <div className="dest">
        {destinations.map((dest, index) => (
          <DestinationBlock key={index} {...dest} />
        ))}
      </div>
    </>
  );
};

export default PopularDestinations;