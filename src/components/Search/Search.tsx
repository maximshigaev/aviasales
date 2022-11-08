import { FC, useState, useCallback } from 'react';
import cn from 'classnames';

// Styles
import './search.scss';

// Constants
import { SearchBtns } from '../../constants';

// Images
import businessArrowIcon from '../../img/businessArrowIcon.svg';

export const Search: FC = () => {
  const [activeBtn, setActiveBtn] = useState(SearchBtns.Avia);

  const aviaBtnClass = cn('search__switchBtn', {
    'search__switchBtn--active': activeBtn === SearchBtns.Avia,
  });

  const hotelBtnClass = cn('search__switchBtn', {
    'search__switchBtn--active': activeBtn === SearchBtns.Hotel,
  });

  const handleSwitchBtnClick = useCallback(() => {
    setActiveBtn((activeBtn === SearchBtns.Avia)
      ? SearchBtns.Hotel
      : SearchBtns.Avia
    );
  }, [activeBtn]);

  return (
    <div className="search">
      <h1 className="search__title">Поиск дешевых авиабилетов</h1>
      <p className="search__subTitle">Лёгкий способ купить авиабилеты дёшево</p>

      <div className="search__switchContainer">
        <div className="search__switch">
          <button
            className={aviaBtnClass}
            onClick={handleSwitchBtnClick}
          >
            Авиабилеты
          </button>

          <button
            className={hotelBtnClass}
            onClick={handleSwitchBtnClick}
          >
            Отели
          </button>
        </div>

        <a
          className="search__link"
          href="https://b2b.aviasales.ru/"
        >
          Для бизнеса
          <img
            className="search__arrowIcon"
            src={businessArrowIcon}
            alt="Иконка стрелки"
            width={12}
            height={12}
          />
        </a>
      </div>
    </div>
  );
}
