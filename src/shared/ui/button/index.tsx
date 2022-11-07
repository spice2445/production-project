import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => (
  <button
    type='button'
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
);
