import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { flowRight } from 'lodash/util';
import { postLiked } from 'actions/post/postLiked';

const stateToProps = (state) => ({
  item:       state.post.entry,
  isFetching: state.post.isFetching,
  error:      state.post.error
});

const actionsToProps = (dispatch) => ({
  postLiked: flowRight(dispatch, postLiked)
});

export default connect(stateToProps, actionsToProps)(Post);
