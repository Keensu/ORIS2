import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/layout/Breadcrumb';
import HotelHeader from '../components/hotel/HotelHeader';
import HotelDescription from '../components/hotel/HotelDescription';
import HotelPhoto from '../components/hotel/HotelPhoto';
import HotelSection from '../components/hotel/HotelSection';
import BookingSection from '../components/booking/BookingSection';
import '../assets/styles/HotelPage.css';

const HotelPage = () => {
  return (
    <div>
      <div className="body_main">
        <Header />
        <div className="body_int">
          <Breadcrumb path={['Главная', 'Гостиницы', 'Россия', 'Москва', 'Гостиница Юность']} />
          
          <div className="hotel-wrapper">
            <HotelHeader
              title="Гостиница Юность"
              stars="/images/star_3.png"
              location="Россия, Москва, ул. Хамовнический Вал, д. 34"
              metro="м. Спортивная (123 м) • м. Лужники (210 м)"
              navButtons={[
                { text: 'Об отеле', active: true },
                { text: 'Фото', active: false },
                { text: 'На карте', active: false },
                { text: 'Отзывы', active: false },
                { text: 'Цены', active: false }
              ]}
            />
            
            <HotelDescription
              rating="4.7"
              ratingText="Очень хорошо"
              reviews="299 отзывов"
              description="Гостиница «Юность» расположена в центре Москвы, в 5 минутах ходьбы от станции метро «Спортивная». К услугам гостей номера различных категорий, ресторан, бесплатный Wi-Fi на всей территории и круглосуточная стойка регистрации."
              priceFrom="цена от"
              priceValue="5 500 руб."
              pricePeriod="/номер в сутки"
            />
            
            <HotelPhoto
              src="/images/ece96037a0afdbe6542053ee625eaa315ddc9ed5.JPEG"
              alt="Гостиница Юность - фасад"
            />
            
            <div className="section">
              <HotelSection
                title="Об отеле"
                content={<p>Гостиница «Юность» расположена в историческом центре Москвы, в районе Хамовники, недалеко от Новодевичьего монастыря и стадиона «Лужники». Отель предлагает комфортабельное размещение для туристов и гостей столицы.</p>}
              />
              
              <HotelSection
                title="Расположение"
                content={
                  <ul>
                    <li>м. Спортивная — 123 метров</li>
                    <li>м. Лужники — 210 метров</li>
                    <li>Центр Москвы — 5 км</li>
                    <li>Аэропорт Внуково — 28 км</li>
                  </ul>
                }
              />
              
              <HotelSection
                title="Удобства и услуги"
                content={
                  <ul>
                    <li>Бесплатный Wi-Fi</li>
                    <li>Парковка</li>
                    <li>Ресторан</li>
                    <li>Круглосуточная стойка регистрации</li>
                    <li>Обслуживание номеров</li>
                    <li>Прачечная</li>
                    <li>Сейф на ресепшн</li>
                    <li>Лифт</li>
                  </ul>
                }
              />
              
              <HotelSection
                title="Типы номеров"
                content={
                  <div className="room-types">
                    <div className="room-type">
                      <div className="room-type-header">
                        <h4>Стандарт</h4>
                        <div className="room-price">от 5 500 руб./ночь</div>
                      </div>
                      <ul>
                        <li>Площадь: 18-22 м²</li>
                        <li>Односпальные или двуспальная кровать</li>
                        <li>Кондиционер, телевизор</li>
                        <li>Ванная комната с душем</li>
                      </ul>
                    </div>
                    <div className="room-type">
                      <div className="room-type-header">
                        <h4>Улучшенный</h4>
                        <div className="room-price">от 6 800 руб./ночь</div>
                      </div>
                      <ul>
                        <li>Площадь: 24-28 м²</li>
                        <li>Большая двуспальная кровать</li>
                        <li>Кондиционер, телевизор, холодильник</li>
                        <li>Ванная комната с ванной</li>
                      </ul>
                    </div>
                    <div className="room-type">
                      <div className="room-type-header">
                        <h4>Люкс</h4>
                        <div className="room-price">от 8 900 руб./ночь</div>
                      </div>
                      <ul>
                        <li>Площадь: 32-36 м²</li>
                        <li>Гостиная и спальня</li>
                        <li>Кондиционер, телевизор, холодильник</li>
                        <li>Ванная комната с джакузи</li>
                      </ul>
                    </div>
                  </div>
                }
              />
              
              <HotelSection
                title="Контакты"
                content={
                  <>
                    <p><strong>Телефон:</strong> +7 (499) 653-80-73</p>
                    <p><strong>Email:</strong> yunost@vashotel.ru</p>
                    <p><strong>Адрес:</strong> г. Москва, ул. Хамовнический Вал, д. 34</p>
                  </>
                }
              />
              
              <HotelSection
                title="Правила проживания"
                content={
                  <ul>
                    <li><strong>Заезд:</strong> с 14:00</li>
                    <li><strong>Выезд:</strong> до 12:00</li>
                    <li><strong>Дети:</strong> принимаются</li>
                    <li><strong>Домашние животные:</strong> по запросу</li>
                    <li><strong>Дополнительные места:</strong> по запросу</li>
                  </ul>
                }
              />
              
              <HotelSection
                title="Примечание"
                content={
                  <>
                    <p>Бронирование гостиницы осуществляется бесплатно, без предоплаты. Оплата производится непосредственно в отеле по прибытии.</p>
                    <p>Подтверждение бронирования приходит на электронную почту и SMS.</p>
                  </>
                }
              />
            </div>
            
            <BookingSection buttonText="Забронировать номер" buttonLink="#" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;