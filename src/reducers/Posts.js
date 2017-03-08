import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import store from 'store';
import _ from 'lodash';
import { blogsPerPage } from 'constants/blogsPerPage';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentEntries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, {isFetching: true});
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, {error: true});
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState,
        {
          entries: action.response,
          currentEntries: action.response.slice(0, 2)
        }
      );
    case types.POSTS_LIKED: {
      const entries = store.getState().posts.entries.map(function(obj) {
        if (obj.id == action.id) {
          obj.meta.likeCount = _.get(obj, 'meta.likeCount', 0) + 1;
        }
        return obj;
      });
      return assign({}, store.getState().posts, {entries});
    }
    case types.PAGE_CHANGED: {
      const currentEntries = store.getState().posts.entries.slice(
        (action.num - 1) * blogsPerPage, action.num * blogsPerPage
      );
      return assign({}, store.getState().posts, {currentEntries});
    }
    default:
      return state;
  }
}
