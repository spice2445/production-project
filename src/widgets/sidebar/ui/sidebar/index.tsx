import { useState } from 'react';

import { classNames } from 'shared/lib/classnames';

import { ToggleTheme } from 'features/toggle-theme';
import { ToggleLanguage } from 'features/toggle-language';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/button';

import cls from './style.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button data-testid='sidebar-toggle' type='button' onClick={onToggle}>{t('Переключить')}</Button>

      <div className={collapsed ? cls.switchersCollapsed : cls.switchers}>
        <ToggleTheme />
        <ToggleLanguage className={collapsed ? cls.center : cls.marginLeft} />
      </div>
    </div>
  );
};
