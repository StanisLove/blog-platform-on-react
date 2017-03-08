import * as types from 'constants/actionTypes/AboutActionTypes';
import request from 'superagent';
import { ENDPOINT } from 'constants/ApiUrl';

const requestAbout = () => ({
  type: types.FETCH_ABOUT_REQUEST
});

const receiveAbout = (response) => ({
  type: types.FETCH_ABOUT_SUCCESS,
  response
});

const errorAbout = () => ({
  type: types.FETCH_ABOUT_ERROR
});

export function fetchAbout() {
  return (dispatch) => {
    dispatch(requestAbout());
    return request
      .get(`${ENDPOINT}/about`)
      .end((error, response) => {
        error ? dispatch(errorAbout()) : dispatch(receiveAbout(response.body));
      });
  };
}

