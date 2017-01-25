import React from 'react';

const Author = ({firstName, lastName}) => (
  <p>{firstName} {lastName}</p>
);

Author.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string
};

Author.defaultProps = {
  firstName: 'Anonymous',
  lastName: 'Anonymous'
};

export default Author;
