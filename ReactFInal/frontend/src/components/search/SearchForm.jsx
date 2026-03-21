import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/SearchForm.css';

const SearchForm = ({
  formId = 'searchForm',
  buttonText = 'Найти гостиницу!',
  onSearch,
  searchParams,
  navigateOnSubmit = true
}) => {
  const [showPromo, setShowPromo] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    checkIn: '',
    checkOut: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    stars: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      city: searchParams?.city || '',
      checkIn: searchParams?.checkIn || '',
      checkOut: searchParams?.checkOut || '',
      minPrice: searchParams?.minPrice || '',
      maxPrice: searchParams?.maxPrice || '',
      minRating: searchParams?.minRating || '',
      stars: searchParams?.stars || ''
    }));
  }, [searchParams]);

  const handleCityClick = (e, city) => {
    e.preventDefault();
    setFilters(prev => ({ ...prev, city }));
  };

  const handleCityChange = (e) => {
    setFilters(prev => ({ ...prev, city: e.target.value }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!filters.city.trim()) {
      alert('Пожалуйста, выберите город');
      return;
    }

    const formData = {
      city: filters.city,
      checkIn: filters.checkIn,
      checkOut: filters.checkOut,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      minRating: filters.minRating,
      stars: filters.stars
    };

    if (onSearch) {
      onSearch(formData);
    }

    if (navigateOnSubmit) {
      const nextSearchParams = new URLSearchParams({
        city: formData.city,
        ...(formData.checkIn && { checkIn: formData.checkIn }),
        ...(formData.checkOut && { checkOut: formData.checkOut }),
        ...(formData.minPrice && { minPrice: formData.minPrice }),
        ...(formData.maxPrice && { maxPrice: formData.maxPrice }),
        ...(formData.minRating && { minRating: formData.minRating }),
        ...(formData.stars && { stars: formData.stars })
      });

      navigate(`/search?${nextSearchParams.toString()}`);
    }
  };

  return (
    <div className="searchform border_radius_10" id={formId}>
      <div className="title">Поиск гостиниц</div>
      <form name={`${formId}_form`} onSubmit={handleFormSubmit}>
        <input type="hidden" name="act" value="search" />
        <input type="hidden" name="searchID" value="" className="search_id" />
        <input type="hidden" name="hotel" value="" />
        <input type="hidden" name="redirectTo" value="hotel" />
        <input type="hidden" name="object_type" value="" />
        <input type="hidden" name="object_id" value="" />
        <div className="formint">
          <div className="step step1 stepLocation">
            <div className="title2">
              Куда Вы едете?<img alt="" src="/images/info_red.png" width="16" height="16" align="absmiddle" />
            </div>
            <div className="search_object">
              <div id={`${formId}_object_name`} className="elContent">
                <div>
                  <label><img src="/images/icon_delete.gif" width="9" height="9" alt="x" /></label>
                  <input
                    className="ym-record-keys"
                    type="text"
                    placeholder="Город, отель, аэропорт, вокзал, метро, точный адрес"
                    name="object_name"
                    value={filters.city}
                    onChange={handleCityChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="search_object_variants"></div>
            <ul className="most_wanted_cities">
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Москва')}>Москва</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Будапешт')}>Будапешт</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Париж')}>Париж</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Рим')}>Рим</a></li>
              <li><a href="#" onClick={(e) => handleCityClick(e, 'Санкт-Петербург')}>Санкт-Петербург</a></li>
            </ul>
          </div>
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
                
              </div>
            </div>
          </div>
          <div className="step step3 stepRooms">
            <div className="title2">Дополнительные фильтры</div>
            <div className="SFrooms">
              <div className="SFroomsData">
                <div className="SFroomsData_content">
                  <div className="SFroomsData_row">
                    <div className="SFroomsData_column">
                      <label className="mb-5">Цена от</label>
                      <input
                        type="number"
                        min="0"
                        step="100"
                        name="minPrice"
                        className="styled-select"
                        value={filters.minPrice}
                        onChange={handleInputChange}
                        placeholder="0"
                      />
                    </div>
                    <div className="SFroomsData_column">
                      <label className="mb-5">Цена до</label>
                      <input
                        type="number"
                        min="0"
                        step="100"
                        name="maxPrice"
                        className="styled-select"
                        value={filters.maxPrice}
                        onChange={handleInputChange}
                        placeholder="10000"
                      />
                    </div>
                  </div>
                  <div className="SFroomsData_row" style={{ marginTop: '8px' }}>
                    <div className="SFroomsData_column">
                      <label className="mb-5">Рейтинг от</label>
                      <select
                        name="minRating"
                        className="styled-select"
                        value={filters.minRating}
                        onChange={handleInputChange}
                      >
                        <option value="">Любой</option>
                        <option value="3">3.0+</option>
                        <option value="3.5">3.5+</option>
                        <option value="4">4.0+</option>
                        <option value="4.5">4.5+</option>
                        <option value="5">5.0</option>
                      </select>
                    </div>
                    <div className="SFroomsData_column">
                      <label className="mb-5">Звёзды</label>
                      <select
                        name="stars"
                        className="styled-select"
                        value={filters.stars}
                        onChange={handleInputChange}
                      >
                        <option value="">Любое</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
                </div>
                <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
              </div>
              <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
            </div>
          </div>
          {formId === 'placesAvail' && (
            <div className="step step3 stepAdvertActionCode">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowPromo(!showPromo); }}>Есть промокод?</a>
              {showPromo && (
                <div className="stepAdvertActionCode_content">
                  <span>Введите промокод</span> 
                  <input type="text" name="advert_action_code" value="" className="text" maxLength="8" minLength="8" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="searchButton button">
          <input type="submit" className="ym-record-keys" value={buttonText} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;