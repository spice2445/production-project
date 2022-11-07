import 'app/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/config/theme';

import { ToggleLanguage } from '.';

export default {
  title: 'features/ToggleLanguage',
  component: ToggleLanguage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ToggleLanguage>;

const Template: ComponentStory<typeof ToggleLanguage> = (args) => <ToggleLanguage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
