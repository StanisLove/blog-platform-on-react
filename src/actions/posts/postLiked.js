import * as types from 'constants/actionTypes/PostsActionTypes';
import store from 'store';
import _ from 'lodash';

const postLiked = (id) => {
  const entries = store.getState().posts.entries.map(function(obj) {
    if (obj.id == id) {
      obj.meta.likeCount = _.get(obj, 'meta.likeCount', 0) + 1;
    }
    return obj;
  });

  return {
    type: types.POST_LIKED,
    entries
  };
};

export default postLiked;
