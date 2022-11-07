import { useTheme } from 'app/providers/with-theme';
import { classNames } from 'shared/lib/classnames';

import { Theme } from 'shared/config/theme';
import { Button, ThemeButton } from 'shared/ui/button';

import DarkIcon from '../assets/theme-dark.svg';
import LightIcon from '../assets/theme-light.svg';

import cls from './style.module.scss';

interface ToggleThemeProps {
  className?: string
}

export const ToggleTheme = ({ className }: ToggleThemeProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      data-testid='toggle-theme'
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.toggleTheme, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
