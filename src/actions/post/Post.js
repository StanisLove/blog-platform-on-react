import * as types from 'constants/actionTypes/PostActionTypes';
import request from 'superagent';
import { ENDPOINT } from 'constants/ApiUrl';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));
    return request
      .get(`${ENDPOINT}/posts/${id}`)
      .end((error, response) => {
        error ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
  };
}

