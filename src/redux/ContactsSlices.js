import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './contactsAPI';

const handlePending = state => {
  state.contactList.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contactList.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  state.contactList.isLoading = false;
  state.contactList.items = action.payload;
  state.contactList.error = null;
};

const handleFulfilledAdd = (state, action) => {
  state.contactList.isLoading = false;
  state.contactList.items.push(action.payload);
  state.contactList.error = null;
};

const handleFulfilledDelete = (state, action) => {
  state.contactList.isLoading = false;
  state.contactList.items = state.contactList.items.filter(
    el => el.id !== action.payload.id
  );
  state.contactList.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getAllContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
