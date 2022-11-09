import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Api
import { api } from '../../../api';

// Actions
import { searchActions } from '../searchActions';

// Constants
import { HttpStatusCodes } from '../../../constants';

// Types
import { TCity } from '../../../types';

export function* workFetchCities(): SagaIterator {
  try {
    const response: Response = yield call(api.search.fetchCities);

    if (response.status !== HttpStatusCodes.SUCCESS) {
      throw new Error();
    }

    const cities: TCity[] = yield call([response, response.json]);

    yield put(searchActions.fetchCitiesSuccess(cities));
  } catch {
    yield put(searchActions.fetchCitiesFail());
  }
}
