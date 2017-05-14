import React from 'react';
import { set, assign } from 'lodash/object';
import classNames from 'classnames';
import Text from './elements/TextInput';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { createComment } from 'actions/comments/createComment';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { form, postId, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="ui field">
            <div className="ui action input">
              <Field name="comment" component="input" type="text"
                onChange={ e => this.handleChange(e) }
              />
              <input type="submit"
                className='ui button primary'
                value="Add comment"
                disabled={!this.state.value}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const addComment = (values, dispatch, props) => {
  new Promise((resolve, reject) => {
    dispatch(createComment(props.postId, values))
      .then(() => dispatch(reset(props.form)))
      .catch(error => reject(error));
  });
};

export default reduxForm({onSubmit: addComment})(CommentForm);
