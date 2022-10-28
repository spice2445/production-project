import { useTheme } from 'app/providers/with-theme';

import { classNames } from 'shared/lib/classnames';

import { routes } from 'shared/config/route';
import { renderRoutes } from 'shared/lib/render-routes';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { useTranslation } from 'react-i18next';

export const Routing = (): JSX.Element => {
  const { theme } = useTheme();

  const { t } = useTranslation();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <div>{t('Тестовый перевод')}</div>
        {renderRoutes(routes)}
      </div>
    </div>
  );
};
