import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/jest/with-component';

import { CustomLink, CustomLinkTheme } from '.';

describe('custom link', () => {
  test('default class', () => {
    componentRender(<CustomLink to='/'>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
    screen.debug();
  });
  test('test primary theme', () => {
    componentRender(<CustomLink to='/' theme={CustomLinkTheme.PRIMARY}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
    screen.debug();
  });
  test('test secondary theme', () => {
    componentRender(<CustomLink to='/' theme={CustomLinkTheme.SECONDARY}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('secondary');
    screen.debug();
  });
  test('test tertiary theme', () => {
    componentRender(<CustomLink to='/' theme={CustomLinkTheme.TERTIARY}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('tertiary');
    screen.debug();
  });
});
