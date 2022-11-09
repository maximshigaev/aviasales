import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import { Header, Search } from '../';

// Actions
import { searchActions } from '../../domains/search/searchActions';

export const App: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {    
    dispatch(searchActions.fetchCitiesRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Search />
      </main>
    </>
  );
}
