import 'app/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/config/theme';

import { CustomLink, CustomLinkTheme } from '.';

export default {
  title: 'shared/CustomLink',
  component: CustomLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => <CustomLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: CustomLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: CustomLinkTheme.SECONDARY
};

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  theme: CustomLinkTheme.RED
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: CustomLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: CustomLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  theme: CustomLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
