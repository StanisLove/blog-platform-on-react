import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const postLiked = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    method: 'POST',
    query: {},
    types: [
      types.POST_LIKED_REQUEST,
      types.POST_LIKED_SUCCESS,
      types.POST_LIKED_ERROR
    ]
  }
});
