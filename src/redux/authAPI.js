import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['authAPI'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      providesTags: ['authAPI'],
    }),
    logIn: builder.mutation({
      query: body => ({ url: `/users/login`, method: 'POST', body }),
      invalidatesTags: ['authAPI'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['authAPI'],
    }),
  }),
});


export const { useSignUpMutation, useLogInMutation, useLogOutMutation } = authAPI;