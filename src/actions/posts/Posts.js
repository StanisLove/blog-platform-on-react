import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';
export const fetchPosts = () => ({
  [API_CALL]: {
    endpoint: '/',
    method: 'GET',
    query: {},
    types: [
      types.FETCH_POSTS_REQUEST,
      types.FETCH_POSTS_SUCCESS,
      types.FETCH_POSTS_ERROR
    ]
  }
});
