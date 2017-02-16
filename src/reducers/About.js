import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/AboutActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  title: '',
  text: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ABOUT_REQUEST:
      return assign({}, initialState, {isFetching: true});
    case types.FETCH_ABOUT_ERROR:
      return assign({}, initialState, {error: true});
    case types.FETCH_ABOUT_SUCCESS:
      return assign({}, initialState,
        {
          title: action.response.title,
          text: action.response.text
        }
      );
    default:
      return state;
  }
}
