import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsSlices';
import { filterReducer } from './FilterSlices';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

});


