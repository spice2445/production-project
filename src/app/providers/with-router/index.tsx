import { Suspense, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'shared/ui/loader';

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<Loader className='page__loader' />}>{component()}</Suspense>
  </BrowserRouter>
);
