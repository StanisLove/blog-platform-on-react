import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';

const CommentItem = ({body}) => (
  <Item>
    <p>{body}</p>
  </Item>
);

CommentItem.propTypes = {
  body: PropTypes.string
};

export default CommentItem;
