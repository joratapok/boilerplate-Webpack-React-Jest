import {Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {AboutLazy} from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage/HomePage';

import {MainLayout} from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={'Loading...'}>
            <AboutLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
