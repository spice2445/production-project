import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation('not-found');
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
