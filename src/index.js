/*eslint-disable import/no-import-module-exports*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './reducers/reducers';
import App from './routes/App';

// This will create context will all data fetched during server side rendering
// const BroswerDataContext = createBroswerContext();
{ /* <BroswerDataContext>
    </BroswerDataContext> */ }

const history = createBrowserHistory();
// avoid creating additional references to the preloaded state
// const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware)) || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, window.__PRELOADED_STATE__, composeEnhancers());

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
