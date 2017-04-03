import React, { PropTypes } from 'react';
import { Item } from  'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import Helmet from 'react-helmet';

const Post = ({item, postLiked}) => (
  <div>
    <Item.Group>
      <BlogItem item={item} postLiked={() => postLiked(item.id)} />
    </Item.Group>
    { item && <Helmet title={item.title} /> }
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  postLiked: PropTypes.func
};

export default Post;
