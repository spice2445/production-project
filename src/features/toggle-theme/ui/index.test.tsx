import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/render-withTranslations';

import { ToggleTheme } from '.';

describe('Toggle-theme', () => {
  test('test render', () => {
    renderWithTranslation(<ToggleTheme />);
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();
  });
});
