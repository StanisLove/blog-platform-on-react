import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';

export const updatePost = (values) => ({
  [API_CALL]: {
    endpoint: '/',
    method: 'POST',
    query: {values},
    types: [
      types.POSTS_UPDATE_REQUEST,
      types.POSTS_UPDATE_SUCCESS,
      types.POSTS_UPDATE_ERROR
    ]
  }
});
