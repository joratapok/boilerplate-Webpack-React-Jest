import type {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div>
      {__DEV__ ? 'development mode' : 'production mode'}
      <div style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>home page</Link>
        <Link to={'/about'}>about page</Link>
      </div>
      <Outlet />
    </div>
  );
};
