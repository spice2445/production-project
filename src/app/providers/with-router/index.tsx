import { Suspense, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>
  </BrowserRouter>
);
