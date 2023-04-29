import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlices';
import { contactsAPI } from './contactsAPI';
import { authAPI } from './authAPI';
import { modalReducer } from './ModalSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    modal: modalReducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsAPI.middleware).concat(authAPI.middleware),
});


