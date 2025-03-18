import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './rootReducer';

const PERSISTED_STATE_VERSION = -1;

const persistConfig = {
  key: 'REDUX_PERSIST',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
  version: PERSISTED_STATE_VERSION,
  debug: __DEV__,
  throttle: 1500,
  migrate: (state: any) => {
    /**
     * IMPORTANT
     * If there is a breaking change to any data structure stored in Redux Persist
     * Create a migration script and increment the PERSISTED_STATE_VERSION:
     * https://github.com/rt2zz/redux-persist/blob/master/docs/migrations.md
     */
    return Promise?.resolve(state);
  },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export {store, persistor};
