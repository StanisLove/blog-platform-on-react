import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import store from 'store';

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
    case types.POST_LIKED_REQUEST:
      return assign({}, store.getState().posts, {isFethcing: true});
    case types.POST_LIKED_ERROR:
      return assign({}, store.getState().posts, {error: true});
    case types.POST_LIKED_SUCCESS:
      return assign({}, initialState, {entry: action.response});
    default:
      return state;
  }
}
