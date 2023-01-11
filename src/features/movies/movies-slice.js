import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_URL, TMDB_AUTH_TOKEN } from '../../config/config';

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
      fetchMovieCategories: builder.query({
        query() {
          return '/genre/movie/list';
        },
      }),
      fetchMoviesByCategories: builder.query({
        query(params) {
          return `/discover/movie?with_genres=${params.id}&page=${params.pageNum}`;
        },
      }),
      fetchDetails: builder.query({
        query(id) {
          return `/movie/${id}`;
        },
      }),
    };
  },
});

export const {
  useFetchTopRatedQuery,
  useFetchTrendingQuery,
  useFetchMovieCategoriesQuery,
  useFetchMoviesByCategoriesQuery,
  useFetchDetailsQuery,
} = apiSlice;
