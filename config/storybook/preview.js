import { addDecorator } from '@storybook/react';

import { Theme } from 'shared/config/theme';

import { RouteDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
