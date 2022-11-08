import { FC } from 'react';

// Components
import { Header } from '../';
import { Search } from '../';

export const App: FC = () => (
  <>
    <Header />
    <main>
      <Search />
    </main>
  </>
);
