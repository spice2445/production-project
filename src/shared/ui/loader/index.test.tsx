import { render, screen } from '@testing-library/react';

import { Loader } from '.';

describe('loader', () => {
  test('test render', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
