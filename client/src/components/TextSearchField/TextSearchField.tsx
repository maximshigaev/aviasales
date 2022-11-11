import { FC, useState, MutableRefObject, FocusEvent } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Hooks
import { useFocus } from '../../hooks';

// Types
import { TCity } from '../../types';

// Styles
import '../AviaSearch/aviaSearch.scss';
import './textSearchField.scss';

// Constants
import { FieldLabels } from '../../constants';

// Selectors
import { searchSelectors } from '../../domains/search/searchSelectors';

// Actions
import { searchActions } from '../../domains/search/searchActions';

type TProps = {
  text: string;
  value: string;
  name: string;
  toInputRef: MutableRefObject<HTMLInputElement | null>;
  code: null | string;
  handleChange: (name: string, value: string, code?: string) => void;
}

export const TextSearchField: FC<TProps> = ({ text, value, handleChange, name, toInputRef, code }) => {
  const [filteredCities, setFilteredCities] = useState<TCity[]>([]);

  const { handleFocus, isFocused } = useFocus();

  const availableCities = useSelector(searchSelectors.selectCities);
  const isFormInputError = useSelector(searchSelectors.selectIsFromInputError);
  const isToInputError = useSelector(searchSelectors.selectIsToInputError);

  const dispatch = useDispatch();

  const inputClassName = cn(
    'aviaSearch__input',
    'textSearchField',
    {
      'textSearchField--from': text === FieldLabels.From,
      'textSearchField--error': text === FieldLabels.From ? isFormInputError : isToInputError,
    },
  );

  const handleInputChange = (name: string, value: string) => {
    handleChange(name, value);

    const newFilteredCities = availableCities
      .filter((city) => city.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 7);

    setFilteredCities(newFilteredCities);
  }

  const handleBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const isCityClicked = evt.relatedTarget && evt.relatedTarget.classList.contains('textSearchField__itemBtn');    
  
    if (isCityClicked) {
      const selectedCityName = (evt.relatedTarget!.firstElementChild as HTMLElement).textContent as string;
      const selectedCityCode = (evt.relatedTarget!.children[2] as HTMLElement).textContent as string;

      handleChange(name, selectedCityName, selectedCityCode);
      dispatch(searchActions.clearFromInputError());
      dispatch(searchActions.clearToInputError());
    }

    if ((text === FieldLabels.From) && isCityClicked) {      
      toInputRef!.current!.focus();
    }
    
    handleFocus();
  }

  const isDropdownVisible = isFocused
    && !!value
    && availableCities.findIndex(({ name }) => name.toLowerCase() === value.toLowerCase()) === -1;    

  return (
    <label className="textSearchField__label">
      <span className="visually-hidden">{text}</span>
      <input
        className={inputClassName}
        placeholder={text}
        type="text"
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        autoComplete="off"
        ref={(text === FieldLabels.To) ? toInputRef : null}
        onChange={({ target: { name, value } }) => handleInputChange(name, value)}
      />
      {isFormInputError && (text === FieldLabels.From) && !isFocused && (
        <div className="textSearchField__errorMessage textSearchField__errorMessage--from">
          Укажите город вылета
        </div>
      )}
      {isToInputError && (text === FieldLabels.To) && !isFocused && (
        <div className="textSearchField__errorMessage">
          Укажите город прибытия
        </div>
      )}
      {isFocused && (
        <span className="textSearchField__hint">{text}</span>
      )}
      {code && (
        <span className="textSearchField__selectedCode">{code}</span>
      )}
      {isDropdownVisible && (
        <ul className="textSearchField__list">
          {filteredCities.map(({ name: cityName, country, code, id }) => (
            <li
              className="textSearchField__item"
              key={id}
            >
              <button
                className="textSearchField__itemBtn"
                type="button"
              >
                <span>{cityName}</span>,
                <span className="textSearchField__country">{country}</span>
                <span className="textSearchField__code">{code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
