import { FC } from 'react';
import cn from 'classnames';

// Hooks
import { useFocus } from '../../hooks';

// Styles
import '../AviaSearch/aviaSearch.scss';
import './textSearchField.scss';

// Constants
import { FieldLabels } from '../../constants';

type TProps = {
  text: string;
  value: string;
  name: string;
  handleChange: (name: string, value: string) => void;
}

export const TextSearchField: FC<TProps> = ({ text, value, handleChange, name }) => {
  const { handleFocus, isFocused } = useFocus();

  const inputClassName = cn(
    'aviaSearch__input',
    'textSearchField',
    {
      'textSearchField--from': text === FieldLabels.From,
    },
  );

  return (
    <label className="textSearchField__label">
      <span className="visually-hidden">{text}</span>
      <input
        className={inputClassName}
        placeholder={text}
        type="text"
        name={name}
        onFocus={handleFocus}
        onBlur={handleFocus}
        value={value}
        onChange={({ target: {  name, value} }) => handleChange(name, value)}
      />
      {isFocused && (
        <span className="textSearchField__hint">{text}</span>
      )}
    </label>
  );
}
