import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { blogsPerPage } from 'constants/blogsPerPage';
import { cloneDeep } from 'lodash/lang';

export const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  currentEntries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, {isFetching: true});
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, {error: true});
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state,
        {
          entries: action.response,
          currentEntries: action.response.slice(0, 2)
        }
      );
    case types.POSTS_UPDATE_REQUEST:
      return assign({}, state, {isFethcing: true});
    case types.POSTS_UPDATE_ERROR:
      return assign({}, state, {error: true});
    case types.POSTS_UPDATE_SUCCESS:
      return assign({}, state,
        {
          entries: action.response,
          currentEntries: action.response.slice(0, 2)
        }
      );
    case types.PAGE_CHANGED: {
      const currentEntries = state.entries.slice(
        (action.num - 1) * blogsPerPage, action.num * blogsPerPage
      );
      return assign({}, state, {currentEntries});
    }
    case types.POST_COMMENT_CREATE_REQUEST: {
      return assign({}, state, {isFetching: true});
    }
    case types.POST_COMMENT_CREATE_ERROR:
      return assign({}, state, {error: true});
    case types.POST_COMMENT_CREATE_SUCCESS: {
      const res = action.response;
      const newState = cloneDeep(state);
      const entry = newState.currentEntries.find(e => e.id == res.post_id);
      newState.isFetching = false;
      if (entry) entry.comments.push({id: res.id, body: res.body});
      return newState;
    }
    default:
      return state;
  }
}
