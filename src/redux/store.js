import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlices';
import { contactsAPI } from './contactsAPI';
import { authAPI } from './authAPI';
import { modalReducer } from './ModalSlice';
import { userAuthSliceReducer } from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'authUser',
  storage,
  whiteList: ['token']
}


const persisteduUserAuthSliceReducer = persistReducer(persistConfig, userAuthSliceReducer)

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    modal: modalReducer,
    auth: persisteduUserAuthSliceReducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsAPI.middleware).concat(authAPI.middleware),
});



export const persistor = persistStore(store);