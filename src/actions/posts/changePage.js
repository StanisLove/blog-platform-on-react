import * as types from 'constants/actionTypes/PostsActionTypes';
import store from 'store';
import { blogsPerPage } from 'constants/blogsPerPage';

const changePage = (num) => ({
  type: types.PAGE_CHANGED,
  currentEntries: store.getState().posts.entries.slice(
    (num - 1) * blogsPerPage, num * blogsPerPage
  )
});

export default changePage;
