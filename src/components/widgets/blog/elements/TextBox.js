import React from 'react';

const TextBox = ({ text }) => (
  <p>{text}</p>
);

TextBox.propTypes = {
  text: React.PropTypes.string
}

TextBox.defaultProps = {
  text: 'You can add some text'
}

export default TextBox;
