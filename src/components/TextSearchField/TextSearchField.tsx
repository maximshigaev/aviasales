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
}

export const TextSearchField: FC<TProps> = ({ text }) => {
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
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      {isFocused && (
        <span className="textSearchField__hint">{text}</span>
      )}
    </label>
  );
}
