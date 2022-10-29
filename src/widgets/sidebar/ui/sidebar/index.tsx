import { useState } from 'react';

import { classNames } from 'shared/lib/classnames';

import { ToggleTheme } from 'features/toggle-theme';
import { ToggleLanguage } from 'features/toggle-language';
import { useTranslation } from 'react-i18next';

import cls from './style.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type='button' onClick={onToggle}>{t('Переключить')}</button>

      <div className={collapsed ? cls.switchersCollapsed : cls.switchers}>
        <ToggleTheme />
        <ToggleLanguage className={collapsed ? cls.center : cls.marginLeft} />
      </div>
    </div>
  );
};
