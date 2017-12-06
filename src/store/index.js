import { createStore, applyMiddleware, compose } from 'redux';
import reduxHistoryPushMiddleware from 'redux-history-push-middleware'
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from './reducers';

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
