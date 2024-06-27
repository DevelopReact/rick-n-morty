// redux
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// baseUrl
import { jsonPlaceholderBaseURL } from '../libs/constants';

export const jsonPlaceholderAPI = createApi({
  reducerPath: 'jsonPlaceholderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: jsonPlaceholderBaseURL
  }),

  tagTypes: ['Character', 'Location', 'Episode'],

  endpoints: () => ({})
});
