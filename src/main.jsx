import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import Auth from './routes/auth';
import Bookmarks from './routes/bookmarks';
import ErrorPage from './routes/error-page';
import Index from './routes/index';
import Movies from './routes/movies';
import Root from './routes/root';
import TvSeries from './routes/tv-series';
import MediaItem from './components/global/MediaItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/auth',
            element: <Auth />,
          },
          {
            path: '/movies',
            element: <Movies />,
            children: [
              {
                path: 'genres/:id',
                element: <MediaItem />,
              },
            ],
          },
          {
            path: '/tv',
            element: <TvSeries />,
          },
          {
            path: '/bookmarks',
            element: <Bookmarks />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
