import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';

export const initialState = {
  isFetching: false,
  error: false,
  entry: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, {isFetching: true});
    case types.FETCH_POST_ERROR:
      return assign({}, state, {error: true});
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, {entry: action.response});
    case types.POST_UPDATE_REQUEST:
      return assign({}, state, {isFethcing: true});
    case types.POST_UPDATE_ERROR:
      return assign({}, state, {error: true});
    case types.POST_UPDATE_SUCCESS:
      return assign({}, state, {entry: action.response});
    case types.POST_VALIDATION_REQUEST:
      return assign({}, state, {isFethcing: true});
    case types.POST_VALIDATION_ERROR:
      return assign({}, state, {formValid: false });
    case types.POST_VALIDATION_SUCCESS:
      return assign({}, state, {formValid: true});
    case types.POST_COMMENT_CREATE_REQUEST: {
      return assign({}, state, {isFetching: true});
    }
    case types.POST_COMMENT_CREATE_ERROR:
      return assign({}, state, {error: true});
    case types.POST_COMMENT_CREATE_SUCCESS: {
      return assign({}, state, {
        entry: {
          comments: state.entry.comments.concat([{
            id: action.response.id, body: action.response.body
          }])
        },
        isFetching: false
      });
    }
    default:
      return state;
  }
}
