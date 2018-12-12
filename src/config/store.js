/* global __DEV__ */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

let middleware = [thunk];

if (__DEV__) {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
  middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
  middleware = [...middleware];
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
  debug: __DEV__,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(...middleware),
  );
  return createStore(persistedReducer, initialState, enhancer);
}
