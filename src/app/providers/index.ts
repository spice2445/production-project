import compose from 'compose-function';

import { withRouter } from './with-router';
import { withSuspense } from './with-suspense';

export const withProviders = compose(withRouter, withSuspense);
