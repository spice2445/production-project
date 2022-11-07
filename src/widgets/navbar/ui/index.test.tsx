import { screen } from '@testing-library/react';
import { renderWithRouterTranslations } from 'shared/lib/tests/render-withRouter-Translations';

import { Navbar } from '.';

describe('Navbar', () => {
  test('test render', () => {
    renderWithRouterTranslations(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
