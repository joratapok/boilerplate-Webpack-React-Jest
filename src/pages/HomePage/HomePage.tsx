// @ts-ignore
import * as c from './homePage.module.css';

export const HomePage = () => {
  return (
    <div className={c.container}>
      <h1 className="text-3xl" data-testid={'homePageTestId'}>
        Home Page
      </h1>
    </div>
  );
};

export default HomePage;
