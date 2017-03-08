import React, { PropTypes } from 'react';
import { Item } from  'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';

const Post = ({item, postLiked}) => (
  <Item.Group>
    <BlogItem item={item} postLiked={postLiked} />
  </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object,
  postLiked: PropTypes.func
};

export default Post;
