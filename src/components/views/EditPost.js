import React from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

const renderField = ({ asyncValidating, input, label, type, meta: { touched, error, warning } }) => (
  <div className = { classNames(
    'ui field',
    { error },
    asyncValidating === label ? 'async-validating' : ''
  )}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type} />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

const EditPost = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field component={renderField} type="text"
        label="Title" name="title" />
      <Field component={renderField} type="text"
        label="Created at" name="createdAt" />
      <Field component={renderField} type="text"
        label="First Name" name="firstName" />
      <Field component={renderField} type="text"
        label="Last Name" name="lastName" />
      {(!pristine && !submitting) &&
          <button className="ui button" onClick={reset}>Clear form</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPost;
