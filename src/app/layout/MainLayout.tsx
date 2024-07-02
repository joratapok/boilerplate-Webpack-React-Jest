import type {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

import carolineImg from '@/assets/caroline.png';
import pesicImg from '@/assets/SAa2Ye0DJ10.jpg';
import SwitchVertical from '@/assets/switch-vertical.svg';

export const MainLayout: FC = () => {
  return (
    <div>
      main layout {`${__DEV__}`}
      <Link to={'/about'}>about page</Link>
      <Link to={'/'}>home page</Link>
      <img width={100} height={100} src={carolineImg} alt="test_picture" />
      <img width={100} height={100} src={pesicImg} alt="test_picture" />
      <SwitchVertical height={50} width={50} />
      <Outlet />
    </div>
  );
};
