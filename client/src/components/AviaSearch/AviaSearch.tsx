import { FC, useState, useCallback, useRef, MutableRefObject } from 'react';
import { useSelector } from 'react-redux';

// Components
import {
  TextSearchField,
  DateSearchField,
  SelectSearchField,
} from '../';

// Constants
import { FieldLabels } from '../../constants';

// Styles
import './aviaSearch.scss';

// Constants
import { Classes } from '../../constants';

// Images
import swapArrowIcon from '../../img/swapArrowIcon.svg';

// Selectors
import { searchSelectors } from '../../domains/search/searchSelectors';

export const AviaSearch: FC = () => {
  const [formValues, setFormValues] = useState({
    from: '',
    to: '',
    where: '',
    back: '',
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    class: Classes.Economy,
  });

  const [selectedFromCity, setSelectedFromCity] = useState<{name: string, code: string} | null>(null);
  const [selectedToCity, setSelectedToCity] = useState<{ name: string, code: string } | null>(null);

  const handleChange = useCallback((name:string, value: string | object, code?: string) => {
    if (code) {
      if (name === 'from') {
        setSelectedFromCity({
          name: value as string,
          code,
        });
      } else {
        setSelectedToCity({
          name: value as string,
          code,
        });
      }
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  const handleSwapBtnClick = () => {
    setFormValues({
      ...formValues,
      from: formValues.to,
      to: formValues.from,
    });
    setSelectedFromCity(selectedToCity);
    setSelectedToCity(selectedFromCity);
  }

  const toInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  return (
    <form className="aviaSearch">
      <TextSearchField
        text={FieldLabels.From}
        value={formValues.from}
        name="from"
        toInputRef={toInputRef}
        code={selectedFromCity ? selectedFromCity.code : null}
        handleChange={handleChange}
      />

      {formValues.from && formValues.to && (
        <button
          className="aviaSearch__swapBtn"
          type="button"
          onClick={handleSwapBtnClick}
        >
          <img
            className="aviaSearch__swapArrow aviaSearch__swapArrow--right"
            src={swapArrowIcon}
            alt="Иконка стрелки вправо"
            width={13}
            height={6}
          />
          <img
            className="aviaSearch__swapArrow aviaSearch__swapArrow--left"
            src={swapArrowIcon}
            alt="Иконка стрелки влево"
            width={13}
            height={6}
          />
        </button>
      )}

      <TextSearchField
        text={FieldLabels.To}
        value={formValues.to}
        name="to"
        toInputRef={toInputRef}
        code={selectedToCity ? selectedToCity.code : null}
        handleChange={handleChange}
      />

      <DateSearchField
        text={FieldLabels.Where}
        value={formValues.where}
      />

      <DateSearchField
        text={FieldLabels.Back}
        value={formValues.back}
      />

      <SelectSearchField
        passengers={formValues.passengers}
        classValue={formValues.class}
        handleChange={handleChange}
      />

      <button
        className="aviaSearch__btn"
        type="button"
      >
        Найти билеты
      </button>
    </form>
  );
}
