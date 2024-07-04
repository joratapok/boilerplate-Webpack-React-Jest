import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {AboutLazy} from '@/pages/AboutPage';
import {HomePage} from '@/pages/HomePage';

import {MainLayout} from '../layout/MainLayout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={'Loading...'}>
              <AboutLazy />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
