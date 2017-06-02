import reducer, { initialState } from '../Posts';
import { assign } from 'lodash/object';

describe('Posts reducers', () => {
  it('FETCH_POSTS_REQUEST', () => {
    const state = reducer(initialState, { type: 'FETCH_POSTS_REQUEST' });

    expect(state).toEqual(assign({}, initialState, { isFetching: true}));
  });

  it('FETCH_POSTS_ERROR', () => {
    const state = reducer(initialState, { type: 'FETCH_POSTS_ERROR' });

    expect(state).toEqual(assign({}, initialState, { error: true}));
  });

  it('FETCH_POSTS_SUCCESS', () => {
    const action = {
      type: 'FETCH_POSTS_SUCCESS',
      response: [{ post: 1} , { post: 2 }, { post: 3 }]
    };
    const state = reducer(initialState, action);

    expect(state).toEqual(assign({}, initialState, {
      entries: action.response,
      currentEntries: action.response.slice(0, 2)
    }));
  });
});
