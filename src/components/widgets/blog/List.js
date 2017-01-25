import React from 'react';

import BlogItem from './Item';

const BlogList = ({items, postLiked}) => (
  <ul style={{ listStyleType: 'none' }}>
    {items.map(function(item) {
      return <BlogItem key={item.id} item={item}
      postLiked={() => postLiked(item.id)} />;
    })}
  </ul>
);

BlogList.propTypes = {
  items: React.PropTypes.array,
  postLiked: React.PropTypes.func
};

export default BlogList;
