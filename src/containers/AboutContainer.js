import { connect } from 'react-redux';
import About from 'components/views/About';

const stateToProps = (state) => ({
  title:      state.about.title,
  text:       state.about.text,
  isFetching: state.about.isFetching,
  error:      state.about.error
});

export default connect(stateToProps)(About);
