import { fetchPost } from '../Post';
import * as types from 'constants/actionTypes/PostActionTypes';
import configureMockStore from 'redux-mock-store';
import APIMiddleware from 'middleware/API';
import nock from 'nock';
import { initialState } from 'reducers/Post';
import { ENDPOINT } from 'constants/ApiUrl';

const middlewares = [APIMiddleware];
const mockStore = configureMockStore(middlewares);

describe('fetchPost', () => {
  const apiCall = fetchPost(1)['API_CALL'];

  it('executes with GET method', () => {
    expect(apiCall.method).toEqual('GET');
  });

  it('executes with proper types', () => {
    expect(apiCall.types).toEqual(
      [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    );
  });

  it('executes with proper endpoint', () => {
    expect(apiCall.endpoint).toEqual('/posts/1');
  });

  describe('async action', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('creates FETCH_POST_SUCCESS when fetching post has been done', () => {
      nock(ENDPOINT)
        .get('/posts/1')
        .reply(200, {  post: 1 });

      const store = mockStore(initialState);

      const expectedActions = [
        { type: types.FETCH_POST_REQUEST },
        { type: types.FETCH_POST_SUCCESS,  response: { post: 1 } }
      ].map((obj) => {
        obj.API_CALL = undefined;
        return obj;
      });

      return store.dispatch(fetchPost(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
