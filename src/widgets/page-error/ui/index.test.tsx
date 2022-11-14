import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/jest/with-component';

import { PageError } from '.';

describe('Page-error', () => {
  test('test render', () => {
    componentRender(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
