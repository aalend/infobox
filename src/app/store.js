import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from '../features/movies/movies-slice';
import { seriesApiSlice } from '../features/tv-series/tv-series-slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware, seriesApiSlice.middleware);
  },
});
