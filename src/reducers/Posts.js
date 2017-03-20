import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import store from 'store';
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
    case types.POSTS_LIKED_REQUEST:
      return assign({}, store.getState().posts, {isFethcing: true});
    case types.POSTS_LIKED_ERROR:
      return assign({}, store.getState().posts, {error: true});
    case types.POSTS_LIKED_SUCCESS:
      return assign({}, store.getState().posts,
        {
          entries: action.response,
          currentEntries: action.response.slice(0, 2)
        }
      );
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
