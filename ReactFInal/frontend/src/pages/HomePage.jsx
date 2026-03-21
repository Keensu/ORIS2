import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchForm from '../components/search/SearchForm';
import FeaturesDescription from '../components/sections/FeaturesDescription';
import PopularDestinations from '../components/sections/PopularDestinations';
import LastOrders from '../components/sections/LastOrders';
import CityHotels from '../components/search/CityHotels';
import PromoSection from '../components/sections/PromoSection';
import '../assets/styles/HomePage.css';

const HomePage = () => {
  const [topMoscowHotels, setTopMoscowHotels] = useState([]);
  const [topSpbHotels, setTopSpbHotels] = useState([]);
  const [topNnHotels, setTopNnHotels] = useState([]);

  useEffect(() => {
    fetch('/api/hotels.json')
      .then(response => response.json())
      .then(data => {
        setTopMoscowHotels(data.topMoscowHotels);
        setTopSpbHotels(data.topSpbHotels);
        setTopNnHotels(data.topNnHotels);
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  return (
    <div>
      <div className="body_main">
        <Header />
        <main className="body" role="main">
          <div className="body_int">
            <div className="index">
              <div className="left col">
                <div className="int">
                  <SearchForm />
                  
                  <FeaturesDescription />
                  
                  <PopularDestinations />
                  
                  <div id="vk_groups" style={{ marginTop: '1.25em' }}></div>
                  
                  <LastOrders />
                </div>
              </div>
              
              <div className="right col">
                <div className="int">
                  <h1>Бронирование гостиниц онлайн по всему миру</h1>
                  <CityHotels
                    cityName="Гостиницы Москвы"
                    links={['По станциям метро', 'Мини-гостиницы', 'Эконом-класс']}
                    hotels={topMoscowHotels}
                    bannerImage="/images/1a4aa217d1ac8c16d8decb2c006fc858.jpg"
                  />
                  
                  <CityHotels
                    cityName="Гостиницы Санкт-Петербурга"
                    links={['По станциям метро', 'Мини-гостиницы', 'Эконом-класс']}
                    hotels={topSpbHotels}
                    bannerImage="/images/232193d22633a246192297be812fe465.jpg"
                  />
                  
                  <CityHotels
                    cityName="Гостиницы Нижнего Новгорода"
                    links={['Эконом-класс']}
                    hotels={topNnHotels}
                    bannerImage="/images/1f04e9b3e496b2cf58049190cdababb9.jpg"
                  />
                </div>
              </div>
              
              <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
            </div>
            
            <PromoSection />
          </div>
        </main>
      </div>
      <Footer />
      <input id="for-keyboard-on-ios" tabIndex="-1" style={{ position: 'absolute', top: '-100px', left: '-100px', height: '0px', opacity: '0' }} value="" />
    </div>
  );
};

export default HomePage;