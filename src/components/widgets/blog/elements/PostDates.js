import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import { formatDate } from 'helpers/date';

const PostDates = ({createdAt, updatedAt}) => (
  <span>
    <Icon name='calendar outline' />Created: {formatDate(createdAt)}
    <Icon name='history' />Updated: {formatDate(updatedAt)}
  </span>
);

PostDates.propTypes = {
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default PostDates;
