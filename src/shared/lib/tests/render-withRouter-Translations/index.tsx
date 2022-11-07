import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n-tests';

import { BrowserRouter as Router } from 'react-router-dom';

export const renderWithRouterTranslations = (component: ReactNode) => render(
  <I18nextProvider i18n={i18n}>
    <Router>
      {component}
    </Router>
  </I18nextProvider>
);
