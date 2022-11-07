import { screen } from '@testing-library/react';
import { renderWithRouterTranslations } from 'shared/lib/tests/render-withRouter-Translations';

import { PageError } from '.';

describe('Page-error', () => {
  test('test render', () => {
    renderWithRouterTranslations(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
