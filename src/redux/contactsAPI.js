import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://644667f90431e885f0110f5f.mockapi.io',
  }),
  tagTypes: ['ContactsList'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: '/contacts',
      }),
      providesTags: ['ContactsList'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['ContactsList'],
    }),
    addContacts: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ContactsList'],
    }),
  }),
});

export const {
  useAddContactsMutation,
  useGetAllContactsQuery,
  useDeleteContactsMutation,
} = contactsAPI;

