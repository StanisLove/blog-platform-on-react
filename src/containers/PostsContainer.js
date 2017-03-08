import { connect } from 'react-redux';
import BlogPage from 'components/BlogPage';
import { flowRight } from 'lodash/util';
import { postLiked } from 'actions/posts/postLiked';
import { changePage } from 'actions/posts/changePage';

const stateToProps = (state) => ({
  items:       state.posts.entries,
  itemsOnPage: state.posts.currentEntries,
  isFetching:  state.posts.isFetching,
  error:       state.posts.error
});

const actionsToProps = (dispatch) => ({
  postLiked: flowRight(dispatch, postLiked),
  changePage: flowRight(dispatch, changePage)
});

export default connect(stateToProps, actionsToProps)(BlogPage);
