import React from 'react';

import { formatDate } from 'helpers/date';

const PostDates = ({ createdAt, updatedAt }) => (
  <div>
    <p>Created: {createdAt}</p>
    <p>Updated: {updatedAt}</p>
  </div>
);

export default PostDates;
