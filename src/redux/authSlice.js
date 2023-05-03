import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './authAPI';

const initialState = {
  name: null,
  token: null,
  isAuthorized: false,
};

const userAuthSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
      
  },
  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.name = payload.user.name
        state.isAuthorized = true
      }
    ).addMatcher(authAPI.endpoints.logOut.matchFulfilled, (state) => {
        state.token = null
        state.name = null
        state.isAuthorized = false
    })
  }
});

export const { setUserAuthSlice } = userAuthSlice.actions;
export const userAuthSliceReducer = userAuthSlice.reducer