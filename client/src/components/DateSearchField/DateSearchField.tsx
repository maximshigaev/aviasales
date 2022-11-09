import { FC } from 'react';

// Styles
import '../AviaSearch/aviaSearch.scss';
import './dateSearchField.scss';

// Images
import calendarIcon from '../../img/calendarIcon.svg';

// Constants
import { FieldLabels } from '../../constants';

type TProps = {
  text: string;
  value: string;
}

export const DateSearchField: FC<TProps> = ({ text, value }) => {
  return (
    <button 
      className="dateSearchField aviaSearch__input"
      type="button"
    >
      <span className="visually-hidden">{text}</span>
      {!value && (
        <span className="dateSearchField__placeholder">{text}</span>
      )}
      {(text === FieldLabels.Where) && (
        <img
          className="dateSearchField__icon"
          src={calendarIcon}
          alt="Иконка календаря"
          width={24}
          height={24}
        />
      )}
    </button>
  );
}
