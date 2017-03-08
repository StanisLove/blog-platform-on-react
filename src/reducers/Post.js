import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import store from 'store';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  error: false,
  entry: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, {isFetching: true});
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, {error: true});
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, {entry: action.response});
    case types.POST_LIKED: {
      const entry = Object.assign({}, store.getState().post.entry);
      entry.meta.likeCount = _.get(entry, 'meta.likeCount', 0) + 1;
      return assign({}, initialState, {entry});
    }
    default:
      return state;
  }
}
