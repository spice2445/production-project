import { render } from 'react-dom';
import App from 'app';

import { ThemeProvider } from 'app/providers/with-theme';
import { WithErrorBoundary } from 'app/providers/with-errorboundary';

import 'shared/config/i18n';

render(
  <WithErrorBoundary>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </WithErrorBoundary>,
  document.getElementById('root')
);
