import React, { useState, useEffect } from 'react';
import HotelCard from '../hotel/HotelCard';

const LastOrders = () => {
  const [lastOrders, setLastOrders] = useState([]);

  useEffect(() => {
    fetch('/api/hotels.json')
      .then(response => response.json())
      .then(data => setLastOrders(data.lastOrders))
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

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