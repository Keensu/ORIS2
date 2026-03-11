import React, { useState } from 'react';
import ChildrenManager from '../booking/ChildrenManager';
import '../../assets/styles/SearchForm.css';

const SearchForm = ({ formId = 'searchForm', buttonText = 'Найти гостиницу!' }) => {
  const [showPromo, setShowPromo] = useState(false);

  const handleCityClick = (e, city) => {
    e.preventDefault();
    document.querySelector(`#${formId} input[name="object_name"]`).value = city;
  };

  return (
    <div className="searchform border_radius_10" id={formId}>
      <div className="title">Поиск гостиниц</div>
      <form name={`${formId}_form`} action="#" method="get">
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
                  <input className="ym-record-keys" type="text" placeholder="Город, отель, аэропорт, вокзал, метро, точный адрес" name="object_name" value="" autoComplete="off" />
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
                  <input type="text" name="date_start" className="date-input" value="" placeholder="Введите дату заезда" />
                </div>
                <img alt="" align="absmiddle" src="/images/calendar_24x24.png" width="24" height="24" title="Дата заезда" style={{ opacity: 0.5, cursor: 'default' }} />
              </div>
              <div className="dateDiv">
                <div>
                  <input type="text" name="date_end" className="date-input" value="" placeholder="Введите дату выезда" />
                </div>
                <img alt="" align="absmiddle" src="/images/calendar_24x24.png" width="24" height="24" title="Дата выезда" style={{ opacity: 0.5, cursor: 'default' }} />
              </div>
            </div>
          </div>
          <div className="step step3 stepRooms">
            <div className="title2">Сколько Вам нужно номеров?</div>
            <div className="SFrooms">
              <div className="SFroomsData">
                <div className="SFroomsData_content">
                  <input id={`${formId}_rooms_count`} type="hidden" name="rooms" value="1" />
                  <ChildrenManager roomIndex={1} formId={formId} />
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