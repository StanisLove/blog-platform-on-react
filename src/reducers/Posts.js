import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import store from 'store';

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
    case types.POST_LIKED:
      return assign({}, store.getState().posts, {entries: action.entries});
    case types.PAGE_CHANGED:
      return assign({}, store.getState().posts,
        {
          currentEntries: action.currentEntries
        }
      );
    default:
      return state;
  }
}
