import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('', {}, [className])}>
    <div className={cls.spinner}>
      <div className={cls.spinnerWrapper}>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
      </div>
    </div>
  </div>
);
