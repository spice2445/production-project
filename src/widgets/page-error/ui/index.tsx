import { classNames } from 'shared/lib/classnames';

import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/button';

import cls from './style.module.scss';

interface PageErrorProps {
  className?: string;
}

const reloadPage = () => {
  window.location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation('error-boundary');

  return (
    <div data-testid='page-error' className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
