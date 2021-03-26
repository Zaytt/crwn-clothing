import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middlewares = [logger];

export const store =
  process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
    : createStore(rootReducer);

export const persistor = persistStore(store);

export default { store, persistor };
