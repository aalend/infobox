import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_URL, TMDB_AUTH_TOKEN } from '../../config/config';

export const seriesApiSlice = createApi({
  reducerPath: 'series_api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${TMDB_API_URL}`,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${TMDB_AUTH_TOKEN}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        query() {
          return '/genre/tv/list';
        },
      }),
      fetchByCategories: builder.query({
        query(params) {
          return `/discover/tv?with_genres=${params.id}&page=${params.pageNum}`;
        },
      }),
      fetchDetails: builder.query({
        query(id) {
          return `/tv/${id}`;
        },
      }),
    };
  },
});

export const { useFetchCategoriesQuery, useFetchByCategoriesQuery, useFetchDetailsQuery } =
  seriesApiSlice;
