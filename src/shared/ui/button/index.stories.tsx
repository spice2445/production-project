import 'app/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/config/theme';

import { Button, ThemeButton } from '.';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
