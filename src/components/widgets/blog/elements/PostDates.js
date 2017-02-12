import React from 'react';
import { Icon } from 'semantic-ui-react';

import { formatDate } from 'helpers/date';

const PostDates = ({createdAt, updatedAt}) => (
  <span>
    <Icon name='calendar outline' />Created: {formatDate(createdAt)}
    <Icon name='history' />Updated: {formatDate(updatedAt)}
  </span>
);

PostDates.propTypes = {
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

export default PostDates;
