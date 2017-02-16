import React from 'react';

import { Router, browserHistory, match } from 'react-router';

import routes from 'routes';

import { Provider } from 'react-redux';

import store from 'store';

import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

import ReactDOM from 'react-dom';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
}

browserHistory.listenBefore(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
