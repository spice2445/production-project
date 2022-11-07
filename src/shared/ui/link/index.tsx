import { FC } from 'react';

import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

export enum CustomLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

interface CustomLinkProps extends LinkProps {
  className?: string
  theme?: CustomLinkTheme
}

export const CustomLink: FC<CustomLinkProps> = ({
  className, children, to, theme = CustomLinkTheme.PRIMARY, ...otherProps
}) => (
  <Link
    to={to}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
    className={classNames(cls.link, {}, [className, cls[theme]])}
  >
    {children}
  </Link>
);
