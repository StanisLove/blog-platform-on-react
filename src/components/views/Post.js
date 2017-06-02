import React from 'react';
import PropTypes from 'prop-types';
import { Item } from  'semantic-ui-react';
import BlogItem from 'components/widgets/blog/BlogItem';
import Helmet from 'react-helmet';

const Post = ({item, updatePost}) => (
  <div>
    <Item.Group>
      <BlogItem
        item={item}
        postLiked={() => updatePost(item.id, { postLiked: true })}
        comments={item.comments}
      />
    </Item.Group>
    { item && <Helmet title={item.title} /> }
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  updatePost: PropTypes.func
};

export default Post;
