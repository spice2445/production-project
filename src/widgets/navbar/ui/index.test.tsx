import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/jest/with-component';

import { Navbar } from '.';

describe('Navbar', () => {
  test('test render', () => {
    componentRender(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
