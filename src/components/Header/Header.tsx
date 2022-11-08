import { FC } from 'react';

// Styles
import './header.scss';

// Images
import logoIcon from '../../img/logoIcon.svg';
import logo from '../../img/logo.svg';
import profileIcon from '../../img/profileIcon.svg';
import moreIcon from '../../img/moreIcon.svg';
import globusIcon from '../../img/globusIcon.svg';
import differentIcon from '../../img/differentIcon.svg';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a
          className='header__logoLink'
          href="https://www.aviasales.ru/"
        >
          <img
            src={logoIcon}
            alt="Иконка логотипа"
            width={30}
            height={30}
          />
          <img
            className="header__logo"
            src={logo}
            alt="Логотип aviasales"
            width={107}
            height={30}
          />
        </a>

        <button className="header__btn header__btn--profile">
          <img
            className="header__profileIcon"
            src={profileIcon}
            alt="Иконка профиля"
            width={24}
            height={24}
          />
          <span>Профиль</span>
        </button>

        <button className="header__btn header__btn--more">
          <img
            className="header__moreIcon"
            src={moreIcon}
            alt="Иконка кое-что еще"
            width={24}
            height={24}
          />
          <span>Кое-что Еще</span>
        </button>

        <button className="header__btn  header__btn--currency">
          <img
            src={globusIcon}
            alt="Иконка глобус"
            width={24}
            height={24}
          />
        </button>

        <button className="header__btn header__btn--different">
          <img
            src={differentIcon}
            alt="Иконка разное"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
}
