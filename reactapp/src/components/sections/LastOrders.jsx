import React from 'react';
import HotelCard from '../hotel/HotelCard';
import { lastOrders } from '../../data/hotels';

const LastOrders = () => {
  return (
    <div className="last-orders">
      <div className="h1">Последние бронирования</div>
      <article className="hotels lastOrders">
        {lastOrders.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} type="last-order" />
        ))}
      </article>
    </div>
  );
};

export default LastOrders;