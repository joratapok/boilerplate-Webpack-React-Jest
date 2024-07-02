import {render, screen} from '@testing-library/react';

import {Text} from './index';

describe('тест компонента Text', () => {
  test('отрисовка компонента Text', () => {
    render(<Text dataTestId={'test-id'}>test entry</Text>);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
    expect(screen.getByText('test entry')).toBeInTheDocument();
  });
});
