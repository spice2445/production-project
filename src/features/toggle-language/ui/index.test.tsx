import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/render-withTranslations';

import { ToggleLanguage } from '.';

describe('Toggle-language', () => {
  test('test render', () => {
    renderWithTranslation(<ToggleLanguage />);
    expect(screen.getByTestId('toggle-language')).toBeInTheDocument();
  });
});
