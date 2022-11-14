import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/config/jest/with-translations';

import { ToggleTheme } from '.';

describe('Toggle-theme', () => {
  test('test render', () => {
    renderWithTranslation(<ToggleTheme />);
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();
  });
});
