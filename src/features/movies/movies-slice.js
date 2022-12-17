import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_AUTH_TOKEN, TMDB_API_URL } from '../../config/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${TMDB_API_URL}`,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${TMDB_AUTH_TOKEN}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTopRated: builder.query({
        query(page) {
          return `/movie/top_rated?page=${page}`;
        },
      }),
      fetchTrending: builder.query({
        query() {
          return '/movie/popular';
        },
      }),
    };
  },
});

export const { useFetchTopRatedQuery, useFetchTrendingQuery } = apiSlice;
