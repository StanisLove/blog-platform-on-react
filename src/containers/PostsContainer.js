import { connect } from 'react-redux';
import Index from 'components/views/index';
import { flowRight } from 'lodash/util';
import { updatePost } from 'actions/posts/updatePost';
import { changePage } from 'actions/posts/changePage';

const stateToProps = (state) => ({
  items:       state.posts.entries,
  itemsOnPage: state.posts.currentEntries,
  isFetching:  state.posts.isFetching,
  error:       state.posts.error
});

const actionsToProps = (dispatch) => ({
  updatePost: flowRight(dispatch, updatePost),
  changePage: flowRight(dispatch, changePage)
});

export default connect(stateToProps, actionsToProps)(Index);
