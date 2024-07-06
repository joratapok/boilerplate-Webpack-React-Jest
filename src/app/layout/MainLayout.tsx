import type {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div className="flex flex-1 flex-col">
      {__DEV__ ? 'development mode' : 'production mode'}
      <div>
        navbar
        <nav className="flex gap-4 bg-blue-200">
          <Link to={'/'}>home page</Link>
          <Link to={'/about'}>about page</Link>
        </nav>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <Outlet />
      </div>

      <div className="flex">footer</div>
    </div>
  );
};
