/* eslint-disable no-return-await */
import { RouteProps } from 'react-router-dom';
import { namedLazy } from 'shared/lib/lazy-load';

const MainPage = namedLazy(async () => await import('pages/main'), 'MainPage');
const AboutPage = namedLazy(async () => await import('pages/about'), 'AboutPage');

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
};

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
};
