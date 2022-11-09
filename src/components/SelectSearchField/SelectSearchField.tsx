import { FC } from 'react';

// Styles
import '../AviaSearch/aviaSearch.scss';
import './selectSearchField.scss';

type TProps = {
  passengersValue: number;
  classValue: string;
}

export const SelectSearchField: FC<TProps> = ({ passengersValue, classValue }) => {
  return (
    <div style={{ position: 'relative' }}>
      <button
        className="selectSearchField aviaSearch__input aviaSearch__input"
        type="button"
      >
        <span className="visually-hidden">Пассажиры и класс</span>
        <span className="selectSearchField__passengers">{passengersValue} пассажир</span>
        <span className="selectSearchField__class">{classValue}</span>
        <span className="selectSearchField__arrow" />
      </button>
      <span className="selectSearchField__hint">Пассажиры и класс</span>
    </div>
  );
}
