// Types
import { TState } from '../../types';

export const searchSelectors = {
  selectCities: (state: TState) => state.search.cities,
  selectIsCitiesFetching: (state: TState) => state.search.isCitiesFetching,
  selectIsCitiesError: (state: TState) => state.search.isCitiesError,
  selectIsFromInputError: (state: TState) => state.search.isFromInputError,
  selectIsToInputError: (state: TState) => state.search.isToInputError,
}
