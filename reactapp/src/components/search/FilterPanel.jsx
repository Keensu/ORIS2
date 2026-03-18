import React, { useState } from 'react';
import ChildrenManager from '../booking/ChildrenManager';
import '../../assets/styles/SearchForm.css';

const FilterPanel = ({ searchParams, onSearch }) => {
  const [filters, setFilters] = useState({
    city: searchParams?.city || '',
    checkIn: searchParams?.checkIn || '',
    checkOut: searchParams?.checkOut || '',
    rooms: 1
  });

  const handleCityChange = (e) => {
    setFilters({ ...filters, city: e.target.value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!filters.city.trim()) {
      alert('Пожалуйста, выберите город');
      return;
    }

    // Собираем данные из формы
    const formData = {
      city: filters.city,
      checkIn: filters.checkIn,
      checkOut: filters.checkOut,
      rooms: filters.rooms
    };

    onSearch(formData);
  };

  const handleCityClick = (e, city) => {
    e.preventDefault();
    setFilters({ ...filters, city: city });
  };

  return (
    <div className="searchform border_radius_10">
      <div className="title">Поиск гостиниц</div>
      <form onSubmit={handleFormSubmit}>
        <div className="formint">
          {/* Направление */}
          <div className="step step1 stepLocation">
            <div className="title2">
              Куда Вы едете?<img alt="" src="/images/info_red.png" width="16" height="16" align="absmiddle" />
            </div>
            <div className="search_object">
              <div className="elContent">
                <div>
                  <input 
                    className="ym-record-keys" 
                    type="text" 
                    placeholder="Город, отель, аэропорт, вокзал, метро, точный адрес" 
                    value={filters.city}
                    onChange={handleCityChange}
                    autoComplete="off" 
                  />
                </div>
              </div>
            </div>
            <ul className="most_wanted_cities">
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Москва')}>Москва</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Будапешт')}>Будапешт</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Париж')}>Париж</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Рим')}>Рим</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Санкт-Петербург')}>Санкт-Петербург</a></li>
            </ul>
          </div>

          {/* Даты */}
          <div className="step step2 stepDates">
            <div className="title2">Когда будете проживать?</div>
            <div style={{ marginBottom: '10px' }}>
              <div className="dateDiv" style={{ marginBottom: '5px' }}>
                <div>
                  <input 
                    type="date" 
                    name="checkIn" 
                    className="date-input" 
                    value={filters.checkIn}
                    onChange={handleDateChange}
                    placeholder="Введите дату заезда" 
                  />
                </div>
                <img alt="" align="absmiddle" src="/images/calendar_24x24.png" width="24" height="24" title="Дата заезда" style={{ opacity: 0.5, cursor: 'default' }} />
              </div>
              <div className="dateDiv">
                <div>
                  <input 
                    type="date" 
                    name="checkOut" 
                    className="date-input" 
                    value={filters.checkOut}
                    onChange={handleDateChange}
                    placeholder="Введите дату выезда" 
                  />
                </div>
                <img alt="" align="absmiddle" src="/images/calendar_24x24.png" width="24" height="24" title="Дата выезда" style={{ opacity: 0.5, cursor: 'default' }} />
              </div>
            </div>
          </div>

          {/* Номера */}
          <div className="step step3 stepRooms">
            <div className="title2">Сколько Вам нужно номеров?</div>
            <div className="SFrooms">
              <div className="SFroomsData">
                <div className="SFroomsData_content">
                  <input id="searchForm_rooms_count" type="hidden" name="rooms" value={filters.rooms} />
                  <ChildrenManager roomIndex={1} formId="searchForm" />
                  <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
                </div>
                <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
              </div>
              <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
            </div>
          </div>
        </div>

        <div className="searchButton button">
          <input type="submit" className="ym-record-keys" value="Найти гостиницу!" />
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
