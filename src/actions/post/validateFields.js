import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const validateFields = (values) => ({
  [API_CALL]: {
    endpoint: `/posts/${values.id}/validate_fields`,
    method: 'GET',
    query: { values },
    types: [
      types.POST_VALIDATION_REQUEST,
      types.POST_VALIDATION_SUCCESS,
      types.POST_VALIDATION_ERROR
    ]
  }
});
