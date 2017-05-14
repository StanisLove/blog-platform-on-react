import { connect } from 'react-redux';
import EditPost from 'components/views/EditPost';
import { updatePost } from 'actions/post/updatePost';
import { validateFields } from 'actions/post/validateFields';
import { reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (values.title.length < 5)
    errors.title = 'Title length must be greater than 5 chars';
  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.title.length < 5)
    warnings.title = 'Recomendation: make title length at least 5 chars';
  return warnings;
};

const updateAndValidatePost = (values, dispatch) => (
  new Promise((resolve, reject) => {
    dispatch(updatePost(values.id, values))
      .catch((error) => {
        reject(JSON.parse(error.response.text).errors);
      });
  })
);

const asyncValidate = (values, dispatch) => (
  new Promise((resolve, reject) => {
    dispatch(validateFields(values))
      .then((response) => {
        if (response.valid)
          resolve();
        else
          reject(response);
      });
  })
);

export default connect(
  (state) => ({
    initialValues: {
      id: state.post.entry.id,
      title: state.post.entry.title,
      createdAt: state.post.entry.meta.postDates.createdAt,
      firstName: state.post.entry.meta.author.firstName,
      lastName: state.post.entry.meta.author.lastName
    }
  })
)(reduxForm({
  form: 'editPost',
  validate,
  warn,
  asyncValidate,
  asyncBlurFields: ['title'],
  onSubmit: updateAndValidatePost
})(EditPost));
