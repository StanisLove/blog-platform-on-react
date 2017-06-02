import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Author = ({firstName, lastName}) => (
  <p><Icon name='user' />{firstName} {lastName}</p>
);

Author.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

Author.defaultProps = {
  firstName: 'Anonymous',
  lastName: 'Anonymous'
};

export default Author;
