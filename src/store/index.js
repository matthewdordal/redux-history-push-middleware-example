import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import createBrowserHistory from 'history/createBrowserHistory';

import reduxHistoryPushMiddleware from './reduxHistoryPushMiddleware';

export const history = createBrowserHistory()

const middleware = reduxHistoryPushMiddleware(
  history
);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(middleware)
  )
);

export default store;
