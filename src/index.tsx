import { render } from 'react-dom';
import App from 'app';

import { ThemeProvider } from 'app/providers/with-theme';

import 'shared/config/i18n';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
