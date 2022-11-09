import { takeLatest, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Constants
import { SearchActionTypes } from '../searchConstants';

// Workers
import { workFetchCities } from './searchWorkers';

function* watchFetchCities(): SagaIterator {
  yield takeLatest(SearchActionTypes.FETCH_CITIES_REQUEST, workFetchCities);
}

export function* watchSearch(): SagaIterator {
  yield all([call(watchFetchCities)]);
}
