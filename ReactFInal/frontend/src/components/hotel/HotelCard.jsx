import React from 'react';
import '../../assets/styles/HotelCard.css';

const HotelCard = ({ 
  hotel, 
  type = 'default',
  showMetro = true,
  showLastOrder = true
}) => {
  const {
    id,
    name,
    stars,
    address,
    locality,
    metro,
    image,
    price,
    rating,
    reviews,
    lastOrder,
    link = '#'
  } = hotel;

  const starImage = stars === 4 ? '/images/star_4.png' : '/images/star_3.png';

  return (
    <div className="hotel" itemScope itemType="http://schema.org/Hotel">
      <meta itemProp="telephone" content="+7 (800) 500-05-33" />
      <div className="prices-border"><span></span></div>
      <div className="hotel-foto">
        <meta itemProp="image" content={image} />
        <img className="foto" loading="lazy" src={image} alt={name} width="90" height="90" />
      </div>
      <div className="hotel-base">
        <meta itemProp="url" content={link} />
        <div className="hotel_name">
          <a target="_blank" href={link} rel="nofollow"><span itemProp="name">{name}</span></a>&nbsp;
          <img loading="lazy" alt={`${stars} звезды`} src={starImage} width="64" height="12" className="png" />
        </div>
        <div className="location" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <meta itemProp="addressLocality" content={locality} />
          <span itemProp="streetAddress">{address}</span>
        </div>
        {showMetro && metro && metro.map((m, idx) => (
          <div key={idx} className="metro">
            <a href="#" rel="nofollow">{m.name}</a> <span>{m.distance}</span>
          </div>
        ))}
        {rating && (
          <div className="rate">
            Оценка <span className="rate">{rating}</span> из <span className="rate">5</span>
            {reviews && <span> по <a href="#" rel="nofollow">{reviews} отзывам</a></span>}
          </div>
        )}
        <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
        {showLastOrder && lastOrder && <div className="lastOrder">последнее бронирование: {lastOrder}</div>}
      </div>
      <div className="prices">
        <div className="price">цена от <div className={`hotel_price_${id}`}>{price} руб.</div></div>
        <div className="submit">
          <a className={`hotel_book_${id}`} href="#" rel="nofollow" title="Проверить цены и наличие мест на определенные даты">Наличие мест</a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;