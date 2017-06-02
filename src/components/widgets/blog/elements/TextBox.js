import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({text}) => (
  <p>{text}</p>
);

TextBox.propTypes = {
  text: PropTypes.string
};

TextBox.defaultProps = {
  text: 'You can add some text'
};

export default TextBox;
