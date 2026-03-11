import React from 'react';

const FeaturesDescription = () => {
  return (
    <div className="descr">
      <div className="h1">Бронируйте через ВашОтель.RU!</div>
      <ul className="features-list">
        <li>
          <span className="feature-title">Бесплатное бронирование</span>
          <span className="feature-description"> - мы не берем с Вас денег</span>
        </li>
        <li>
          <span className="feature-title">Моментальное подтверждение</span>
          <span className="feature-description"> - подтверждение о бронировании приходит на факс, email и SMS</span>
        </li>
        <li>
          <span className="feature-title">Отсутствие предоплаты</span>
          <span className="feature-description"> - оплата непосредственно в гостинице по прибытии</span>
        </li>
        <li>
          <span className="feature-title">Низкие цены</span>
          <span className="feature-description"> - гостиницы предлагают спецпредложения на определенные даты</span>
        </li>
        <li>
          <span className="feature-title">Отзывы клиентов</span>
          <span className="feature-description"> - только от реально проживших в гостиницах гостей</span>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesDescription;