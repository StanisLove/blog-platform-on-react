import { map } from 'lodash/collection';
import { compact } from 'lodash/array';
import { parse } from 'qs';

export default function(store, state) {
  const { location, params, routes } = state;
  const query = parse(location.search.substr(1));

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  map(prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}
