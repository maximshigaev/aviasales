import { FC } from 'react';
import cn from 'classnames';

// Images
import minusIcon from '../../img/minusIcon.svg';
import plusIcon from '../../img/plusIcon.svg';

// Styles
import './passengersOption.scss';

type TProps = {
  option: {
    name: string;
    hint: string;
    title: string;
  };
  passengers: {
    adults: number;
    children: number;
    infants: number;
  }
  handleChange: (name: string, value: string | object, code?: string) => void;
}

export const PassengersOption: FC<TProps> = ({ option, handleChange, passengers }) => {  
  const currentAmount = passengers[option.title as keyof typeof passengers];
  
  const handleBtnClick = (type: string) => {
    handleChange(
      'passengers',
      {
        ...passengers,
        [option.title as keyof typeof passengers]: (type === 'minus') ? currentAmount - 1 : currentAmount + 1,
      },
    );
  }
  
  const isMinusBtnDisabled = (option.title === 'adults')
    ? currentAmount === 1
    : currentAmount === 0;

  const isPlusBtnDisabled = (option.title !== 'infants')
    ? passengers.adults + passengers.children + passengers.infants === 9
    : passengers.adults === passengers.infants;

  const plusBtnClass = cn(
    'passengersOption__btn passengersOption__btn--plus',
    {
      'passengersOption__btn--infants': option.title === 'infants',
    },
  );

  return (
    <li className="passengersOption">
      <div className="passengersOption__text">
        <span className="passengersOption__category">{option.name}</span>
        <span className="passengersOption__explanation">{option.hint}</span>
      </div>
      <div className="passengersOption__controls">
        <button
          className="passengersOption__btn passengersOption__btn--minus"
          type="button"
          disabled={isMinusBtnDisabled}
          onClick={() => handleBtnClick('minus')}
        >
          <img
            src={minusIcon}
            alt="Иконка меньше"
            width={8}
            height={2}
          />
        </button>
        <span className="passengersOption__amount">
          {currentAmount}
        </span>
        <button
          className={plusBtnClass}
          type="button"
          disabled={isPlusBtnDisabled}
          onClick={() => handleBtnClick('plus')}
        >
          <img
            src={plusIcon}
            alt="Иконка больше"
            width={8}
            height={8}
          />
        </button>
        {(option.title === 'infants' && (passengers.adults === passengers.infants)) && (
          <div className="passengersOption__tooltip">
            Не более одного младенца (без места) на одного взрослого. Если младенцев больше, добавьте
            ещё пассажиров в категории "Дети до 12 лет".
          </div>
        )}
      </div>
    </li>
  );
}
