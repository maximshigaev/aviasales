import { combineReducers } from 'redux';

// Reducers
import { searchReducer } from '../domains/search/searchReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
});
