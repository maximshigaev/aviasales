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

type TSetFromInputError = {
  type: typeof SearchActionTypes.SET_FROM_INPUT_ERROR,
}

type TClearFromInputError = {
  type: typeof SearchActionTypes.CLEAR_FROM_INPUT_ERROR,
}

type TSetToInputError = {
  type: typeof SearchActionTypes.SET_TO_INPUT_ERROR,
}

type TClearToInputError = {
  type: typeof SearchActionTypes.CLEAR_TO_INPUT_ERROR,
}

export type TSearchActions =
  TFetchCitiesRequest |
  TFetchCitiesSuccess |
  TFetchCitiesFail |
  TSetFromInputError |
  TClearFromInputError |
  TClearToInputError |
  TSetToInputError;

export type TSearchState = {
  cities: TCity[];
  isCitiesError: boolean;
  isCitiesFetching: boolean;
  isFromInputError: boolean;
  isToInputError: boolean;
}
