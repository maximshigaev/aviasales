// Constants
import { SearchActionTypes } from './searchConstants';

// Types
import { TCity } from '../../types';

type TFetchCitiesRequest = {
  type: typeof SearchActionTypes.FETCH_CITIES_REQUEST,
}

type TFetchCitiesSuccess = {
  type: typeof SearchActionTypes.FETCH_CITIES_SUCCESS,
  payload: TCity[],
}

type TFetchCitiesFail = {
  type: typeof SearchActionTypes.FETCH_CITIES_FAIL,
}

export type TSearchActions = TFetchCitiesRequest | TFetchCitiesSuccess | TFetchCitiesFail;

export type TSearchState = {
  cities: TCity[];
  isCitiesError: boolean;
  isCitiesFetching: boolean;
}
