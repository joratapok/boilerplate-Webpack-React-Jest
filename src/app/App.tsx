import {BrowserRouter} from 'react-router-dom';

import {AppRouter} from './providers/AppRouter';

import './style.css';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
