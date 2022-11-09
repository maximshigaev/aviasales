// Constants
import { SearchActionTypes } from './searchConstants';

// Types
import { TSearchActions } from './searchTypes';
import { TCity } from '../../types';

export const searchActions = {
  fetchCitiesRequest: (): TSearchActions => ({
    type: SearchActionTypes.FETCH_CITIES_REQUEST,
  }),

  fetchCitiesSuccess: (cities: TCity[]): TSearchActions => ({
    type: SearchActionTypes.FETCH_CITIES_SUCCESS,
    payload: cities,
  }),

  fetchCitiesFail: (): TSearchActions => ({
    type: SearchActionTypes.FETCH_CITIES_FAIL,
  }),
}
