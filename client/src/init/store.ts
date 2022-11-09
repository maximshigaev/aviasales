import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

// Reducers
import { rootReducer } from './rootReducer';

// Saga
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error) ? 'firebrick' : 'deepskyblue',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005'
  }
});

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
