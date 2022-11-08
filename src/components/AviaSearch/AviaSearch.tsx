import { FC } from 'react';

// Components
import { TextSearchField } from '../';

// Constants
import { FieldLabels } from '../../constants';

export const AviaSearch: FC = () => {
  return (
    <form>
      <TextSearchField text={FieldLabels.From} />
      <TextSearchField text={FieldLabels.To} />
    </form>
  );
}
