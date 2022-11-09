import { all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Watchers
import { watchSearch } from '../domains/search/saga/searchWatchers';

export function* rootSaga(): SagaIterator {
  yield all([call(watchSearch)]);
}
