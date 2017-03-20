import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';

export const postLiked = (id) => ({
  [API_CALL]: {
    endpoint: '/',
    method: 'POST',
    query: {id},
    types: [
      types.POSTS_LIKED_REQUEST,
      types.POSTS_LIKED_SUCCESS,
      types.POSTS_LIKED_ERROR
    ]
  }
});
