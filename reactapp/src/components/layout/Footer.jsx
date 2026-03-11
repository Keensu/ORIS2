import React from 'react';
import '../../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footerdiv">
      <div className="footer">
        m8ggnuss132v4cke
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="footer_l">
                <div className="menu">
                  <a href="#">Страны</a> | 
                  <a href="#">Отдых</a> | 
                  <a href="#">Экскурсии</a> | 
                  <a href="#">О проекте</a> | 
                  <a href="#" style={{ color: 'red' }}>Партнерство</a> | 
                  <a href="#">Карта сайта</a> | 
                  <a href="#" rel="nofollow">Контакты</a> | 
                  <a href="#" rel="nofollow">Помощь</a> | 
                  <a rel="nofollow" href="#" target="_blank">Оферта для физ. лиц</a> | 
                  <a rel="nofollow" href="#" target="_blank">Оферта для юр. лиц</a> | 
                  <a rel="nofollow" href="#" target="_blank">Политика конфиденциальности</a> | 
                  <a rel="nofollow" href="#" target="_blank">Способы оплаты</a>
                </div>
                <div className="copyrights">
                  <div itemScope itemType="http://schema.org/Organization">
                    <span itemProp="name">ВашОтель.RU</span> Москва: <span itemProp="telephone" className="call_phone_1">+7 (499) 653-80-73</span>, 
                    <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                      <span itemProp="addressLocality">Москва</span>, <span itemProp="streetAddress">ул. Образцова, д. 7</span>
                    </span>
                  </div>
                  <div itemScope itemType="http://schema.org/Organization">
                    <span itemProp="name">ВашОтель.RU</span> Санкт-Петербург: <span itemProp="telephone" className="call_phone_2">+7 (800) 500-05-33</span>, 
                    <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                      <span itemProp="addressLocality">Санкт-Петербург</span>, <span itemProp="streetAddress">Левашовский просп., 13а</span>
                    </span>
                  </div>
                  <div style={{ marginTop: '6px' }}>© 2026. ООО "Бронирование отелей". ВашОтель.RU не несет ответственности за достоверность информации, предлагаемой гостиницами.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;