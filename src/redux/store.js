import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlices';
import { contactsAPI } from './contactsAPI';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
});


