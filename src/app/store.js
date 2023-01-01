import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/movies/movies-slice';
import { seriesApiSlice } from '../features/tv-series/tv-series-slice';
import { authSlice } from '../features/auth/auth-slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware, seriesApiSlice.middleware);
  },
});
