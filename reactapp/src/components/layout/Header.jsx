import React, { useState } from 'react';
import '../../assets/styles/Header.css';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  return (
    <header className="menudiv menudiv-phone">
      <div className="logotip">
        <a href="/" title="ВашОтель.RU - моментальное бронирование гостиниц">
          <img loading="lazy" src="/images/logo.gif" alt="ВашОтель.RU - моментальное бронирование гостиниц" />
        </a>
      </div>
      <div className="infoline">
        <div className="descr">
          <div className="content">
            <div className="line-main">Забронировать по телефону</div>
            <div className="line1"><span>Моментальное</span> бронирование гостиниц</div>
            <div className="line2">
              <span className="word1">бесплатно</span>•<span className="word2">без предоплаты</span>•<span className="word3">оплата в гостинице</span>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
        <a className="menu-button" aria-label="меню" href="#"></a>
        <div className="login-content">
          <div className="content not_authed">
            <span className={`chooseCurrency ${showCurrency ? 'chooseCurrency-active' : ''}`}>
              <label onClick={() => setShowCurrency(!showCurrency)} title="Российский рубль">
                <span>Валюта: </span>RUB
              </label>
              <ul className={showCurrency ? '' : 'empty'}>
                {showCurrency ? (
                  <>
                    <li><span>RUB</span><a href="#">Российский рубль</a></li>
                    <li><span>USD</span><a href="#">Доллар США</a></li>
                    <li><span>EUR</span><a href="#">Евро</a></li>
                  </>
                ) : (
                  <img src="/images/loading3.gif" width="25" height="10" alt="Загрузка..." />
                )}
              </ul>
            </span>
            <a href="#" rel="nofollow" className="login-link">Мои брони</a>
            <span className="d">|</span> 
            <a href="#" className="login-link register" rel="nofollow" onClick={() => setShowLoginForm(!showLoginForm)}>Зарегистрироваться</a> 
            <span className="d">|</span> 
            <a href="#" className="login-link login_button" rel="nofollow" onClick={() => setShowLoginForm(!showLoginForm)}>Войти</a>
          </div>
          
          {showLoginForm && (
            <div id="loginform">
              <form method="post" action="#">
                <input type="hidden" name="cabinet" value="" />
                <input type="hidden" name="return_url" value="" />
                <div className="authform">
                  <div className="login-header"><span>Email:</span></div>
                  <div className="login-input"><input type="text" maxLength="150" name="email" tabIndex="1" value="" placeholder="Введите email" /></div>
                  <div className="login-header"><span>Пароль:</span></div>
                  <div className="login-input"><input type="password" maxLength="150" name="pass" tabIndex="2" placeholder="Введите пароль" /></div>
                  <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
                  <div className="remember"><label><input type="checkbox" checked name="remember" value="1" /> запомнить</label></div>
                  <a href="#" className="forget" title="Восстановление пароля">забыли пароль?</a>
                  <button name="submit" type="submit">Войти</button>
                  <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
                  <div className="social">
                    Войти при помощи 
                    <span className="social-sites">
                      <a href="#"><img src="/images/vk_16.gif" alt="ВКонтакте" title="ВКонтакте" width="16" height="16" /></a>
                      <a href="#"><img src="/images/yandex_16.gif" alt="Яндекс" title="Яндекс" width="16" height="16" /></a>
                      <a href="#"><img src="/images/mailru_16.gif" alt="Mail.RU" title="Mail.RU" width="16" height="16" /></a>
                      <a href="#"><img src="/images/ok_16.gif" alt="Одноклассники" title="Одноклассники" width="16" height="16" /></a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          <div className="common-links">
            <div className="menutable">
              <nav className="menu">
                <div className="mitem mitem_sel"><span><a href="#">Гостиницы</a></span><span className="l"></span></div>
                <div className="mitem"><span><a href="#">Отдых</a></span><span className="l"></span></div>
                <div className="mitem"><span><a href="#">Экскурсии</a></span><span className="l"></span></div>
                <div className="mitem"><span><a href="#" rel="nofollow">Группы</a></span><span className="l"></span></div>
                <div className="mitem"><span><a href="#" rel="nofollow">Партнерство</a></span><span className="l"></span></div>
                <div className="phone">
                  <div id="call_phone_1">
                    <a href="tel:+74996538073" className="call_phone_top1"><span>(499)</span> 653-80-73 </a> 
                    <a href="tel:+78005000533" className="call_phone_top2"><span>(800)</span> 500-05-33</a>
                  </div>
                </div>
              </nav>
              <div className="menu_hr"><img src="/images/spacer.gif" width="1" height="1" alt="" /></div>
              <div className="menu_bg"><img src="/images/spacer.gif" width="1" height="1" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
    </header>
  );
};

export default Header;