import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { flowRight } from 'lodash/util';
import { updatePost } from 'actions/post/updatePost';

const stateToProps = (state) => ({
  item:       state.post.entry,
  isFetching: state.post.isFetching,
  error:      state.post.error
});

const actionsToProps = (dispatch) => ({
  updatePost: flowRight(dispatch, updatePost)
});

export default connect(stateToProps, actionsToProps)(Post);
