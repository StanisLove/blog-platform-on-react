import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';

import Author from './elements/Author';
import PostDates from './elements/PostDates';
import Like from './elements/Like';

const Meta = ({meta, postLiked}) => (
  <Item>
    <Author {...meta.author} />
    <PostDates {...meta.postDates} />
    <Like likeCount={meta.likeCount} postLiked={postLiked} />
  </Item>
);

Meta.propTypes = {
  meta: PropTypes.shape({
    author: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    postDates: PropTypes.shape({
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string
    }),
    likeCount: PropTypes.number
  }),
  postLiked: PropTypes.func
};

Meta.defaultProps = {
  meta: {
    author: { firstName: 'Anonymous', lastName: 'Anonymous' },
    postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
    likeCount: 0
  }
};

export default Meta;
