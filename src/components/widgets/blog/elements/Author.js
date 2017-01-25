import React from 'react';
import { Icon } from 'semantic-ui-react';

const Author = ({firstName, lastName}) => (
  <p><Icon name='user' />{firstName} {lastName}</p>
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
