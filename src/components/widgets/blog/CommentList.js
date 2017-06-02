import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentList = ({comments}) => (
  <div>
    {
      comments.map(comment =>
        <CommentItem
          key={comment.id}
          body={comment.body}
        />
      )
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;
