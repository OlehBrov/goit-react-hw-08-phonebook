import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
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
    editContacts: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['ContactsList'],
    }),
  }),
});

export const {
  useAddContactsMutation,
  useGetAllContactsQuery,
  useDeleteContactsMutation,
  useEditContactsMutation,
} = contactsAPI;
