import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log('token before if', token)

      if (token) {
        console.log('token inside if', token)
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['authAPI'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['authAPI'],
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
    getCurrentUser: builder.query({
      query: () => ({
        url: `/users/current`,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetCurrentUserQuery,
} = authAPI;
