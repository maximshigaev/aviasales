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

  setFromInputError: (): TSearchActions => ({
    type: SearchActionTypes.SET_FROM_INPUT_ERROR,
  }),

  clearFromInputError: (): TSearchActions => ({
    type: SearchActionTypes.CLEAR_FROM_INPUT_ERROR,
  }),

  setToInputError: (): TSearchActions => ({
    type: SearchActionTypes.SET_TO_INPUT_ERROR,
  }),

  clearToInputError: (): TSearchActions => ({
    type: SearchActionTypes.CLEAR_TO_INPUT_ERROR,
  }),
}
