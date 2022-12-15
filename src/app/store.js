import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../feaatures/movies/movies-slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
