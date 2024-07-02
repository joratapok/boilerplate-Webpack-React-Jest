import {render, screen} from '@testing-library/react';

import {App} from './App';

describe('Тест App', () => {
  test('render App component', () => {
    render(<App />);
    expect(screen.getByTestId('homePageTestId')).toBeInTheDocument();
  });
});
