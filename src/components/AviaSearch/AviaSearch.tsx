import { FC, useState, useCallback } from 'react';

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

export const AviaSearch: FC = () => {
  const [formValues, setFormValues] = useState({
    from: '',
    to: '',
    where: '',
    back: '',
    passengers: 1,
    class: Classes.Economy,
  });

  const handleChange = useCallback((name:string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  return (
    <form className="aviaSearch">
      <TextSearchField
        text={FieldLabels.From}
        value={formValues.from}
        name="from"
        handleChange={handleChange}
      />

      <TextSearchField
        text={FieldLabels.To}
        value={formValues.to}
        name="to"
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
        passengersValue={formValues.passengers}
        classValue={formValues.class}
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
