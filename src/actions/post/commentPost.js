import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const createComment = (postId, values) => ({
  [API_CALL]: {
    endpoint: `/posts/${postId}/comment`,
    method: 'POST',
    query: {},
    payload: { values },
    types: [
      types.POST_COMMENT_CREATE_REQUEST,
      types.POST_COMMENT_CREATE_SUCCESS,
      types.POST_COMMENT_CREATE_ERROR
    ]
  }
});
