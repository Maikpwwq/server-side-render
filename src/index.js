/*eslint-disable import/no-import-module-exports*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './reducers/reducers';
import App from './routes/App';

const history = createBrowserHistory();
console.log(history);
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
