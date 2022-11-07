import { classNames } from 'shared/lib/classnames';

import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/button';

import cls from './style.module.scss';

interface ToggleLanguageProps {
  className?: string
}

export const ToggleLanguage = ({ className }: ToggleLanguageProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div data-testid='toggle-language' className={classNames(cls.toggleLanguage, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
    </div>
  );
};
