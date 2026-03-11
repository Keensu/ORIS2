import React from 'react';
import DestinationBlock from './DestinationBlock';
import { destinations } from '../../data/hotels';

const PopularDestinations = () => {
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