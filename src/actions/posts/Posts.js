import * as types from 'constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import { ENDPOINT } from 'constants/ApiUrl';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return request
      .get(`${ENDPOINT}/`)
      .end((error, response) => {
        error ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}
