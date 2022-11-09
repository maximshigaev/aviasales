// Types
import { TSearchState, TSearchActions } from './searchTypes';

// Constants
import { SearchActionTypes } from './searchConstants';

const initialState: TSearchState = {
  cities: [],
  isCitiesFetching: false,
  isCitiesError: false,
}

export const searchReducer = (state = initialState, action: TSearchActions): typeof initialState => {
  switch (action.type) {
    case SearchActionTypes.FETCH_CITIES_REQUEST:
      return {
        ...state,
        cities: [],
        isCitiesFetching: true,
        isCitiesError: false,
      };

    case SearchActionTypes.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        isCitiesFetching: false,
        isCitiesError: false,
      };

    case SearchActionTypes.FETCH_CITIES_FAIL:
      return {
        ...state,
        cities: [],
        isCitiesFetching: false,
        isCitiesError: true,
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
}
