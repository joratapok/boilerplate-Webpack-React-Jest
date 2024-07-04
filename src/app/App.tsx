import {BrowserRouter} from 'react-router-dom';

import {AppRouter} from './providers/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
