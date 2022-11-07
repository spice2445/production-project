import { screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/lib/tests/render-withRouter';

import { CustomLink, CustomLinkTheme } from '.';

describe('custom link', () => {
  test('default class', () => {
    renderWithRouter(<CustomLink to='/'>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
    screen.debug();
  });
  test('test primary theme', () => {
    renderWithRouter(<CustomLink to='/' theme={CustomLinkTheme.PRIMARY}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('primary');
    screen.debug();
  });
  test('test secondary theme', () => {
    renderWithRouter(<CustomLink to='/' theme={CustomLinkTheme.SECONDARY}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('secondary');
    screen.debug();
  });
  test('test red theme', () => {
    renderWithRouter(<CustomLink to='/' theme={CustomLinkTheme.RED}>TEST</CustomLink>);
    expect(screen.getByText('TEST')).toHaveClass('red');
    screen.debug();
  });
});
