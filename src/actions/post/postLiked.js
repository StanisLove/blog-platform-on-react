import * as types from 'constants/actionTypes/PostActionTypes';
import store from 'store';
import _ from 'lodash';

export function postLiked() {
  const entry = Object.assign({}, store.getState().post.entry);
  entry.meta.likeCount = _.get(entry, 'meta.likeCount', 0) + 1;

  return {
    type: types.POST_LIKED,
    entry
  };
}
