import { FC, useState } from 'react';
import cn from 'classnames';

// Components
import { PassengersOption } from '../';

// Styles
import '../AviaSearch/aviaSearch.scss';
import './selectSearchField.scss';

// Constants
import { passengersOptions, classOptions } from '../../constants';

type TProps = {
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  classValue: string;
  handleChange: (name: string, value: string | object, code?: string) => void;
}

export const SelectSearchField: FC<TProps> = ({ passengers, classValue, handleChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBtnClick = () => setIsVisible(!isVisible);

  const passengersAmount = passengers.adults + passengers.children + passengers.infants;

  const arrowClass = cn(
    'selectSearchField__arrow',
    {
      'selectSearchField__arrow--opened': isVisible,
    },
  );

  return (
    <div style={{ position: 'relative' }}>
      <button
        className="selectSearchField aviaSearch__input"
        type="button"
        onClick={handleBtnClick}
      >
        <span className="visually-hidden">Пассажиры и класс</span>
        <span className="selectSearchField__passengers">
          {passengersAmount} пассажир
        </span>
        <span className="selectSearchField__class">{classValue}</span>
        <span className={arrowClass} />
      </button>
      <span className="selectSearchField__hint">Пассажиры и класс</span>
      {isVisible && (
        <div className="selectSearchField__settings">
          <ul className="selectSearchField__list">
            {passengersOptions.map((option, index) => (
              <PassengersOption
                key={index}
                option={option}
                passengers={passengers}
                handleChange={handleChange}  
              />
            ))}
          </ul>
          <ul className="selectSearchField__classList">
            {classOptions.map((option) => (
              <li className="selectSearchField__classItem">
                <input
                  className="selectSearchField__radio"
                  type="radio"
                  name="class"
                  id={option}
                  checked={classValue === option.toLowerCase()}
                  onChange={() => handleChange('class', option.toLowerCase())}
                />
                <label
                  className="selectSearchField__label"
                  htmlFor={option}
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
