import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Auth from './routes/auth';
import ErrorPage from './routes/error-page';
import Index from './routes/index';
import Movies from './routes/movies';
import Root from './routes/root';
import Tv from './routes/tv';

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
          },
          {
            path: '/tv',
            element: <Tv />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
