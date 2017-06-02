import React from 'react';
import PropTypes from 'prop-types';
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
