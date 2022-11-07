import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames';
import { CustomLink, CustomLinkTheme } from 'shared/ui/link';

import cls from './style.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div data-testid='navbar' className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <CustomLink theme={CustomLinkTheme.SECONDARY} className={cls.mainLink} to='/'>{t('Главная')}</CustomLink>
        <CustomLink theme={CustomLinkTheme.TERTIARY} to='/about'>{t('О сайте')}</CustomLink>
      </div>
    </div>
  );
};
