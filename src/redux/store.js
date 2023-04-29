import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlices';
import { contactsAPI } from './contactsAPI';
import { authAPI } from './authAPI';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsAPI.middleware).concat(authAPI.middleware),
});


