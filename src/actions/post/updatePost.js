import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const updatePost = (id, values) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    method: 'POST',
    query: { values },
    types: [
      types.POST_UPDATE_REQUEST,
      types.POST_UPDATE_SUCCESS,
      types.POST_UPDATE_ERROR
    ]
  }
});
