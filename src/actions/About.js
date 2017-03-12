import * as types from 'constants/actionTypes/AboutActionTypes';
import { API_CALL } from 'middleware/API';

export const fetchAbout = () => ({
  [API_CALL]: {
    endpoint: '/about',
    method: 'GET',
    query: {},
    types: [
      types.FETCH_ABOUT_REQUEST,
      types.FETCH_ABOUT_SUCCESS,
      types.FETCH_ABOUT_ERROR
    ]
  }
});

