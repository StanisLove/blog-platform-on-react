import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import APIMiddleware from 'middleware/API';
import DevTools from 'containers/DevTools';

const store = (initialStore) => createStore(
  reducers,
  initialStore,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
