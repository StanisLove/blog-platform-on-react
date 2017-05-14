import React, { PropTypes } from 'react';
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
