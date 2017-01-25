import React from 'react';

import { formatDate } from 'helpers/date';

const PostDates = ({createdAt, updatedAt}) => (
  <div>
    <p>Created: {formatDate(createdAt)}</p>
    <p>Updated: {formatDate(updatedAt)}</p>
  </div>
);

PostDates.propTypes = {
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

export default PostDates;
