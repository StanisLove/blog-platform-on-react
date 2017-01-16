import React from 'react';

import BlogItem from './Item';

class BlogList extends React.Component {
  render () {
    const { items, postLiked } = this.props;
    const style = {
      listStyleType: 'none'
    }

    return (
      <ul style={style}>
        {items.map(function(item) {
          return <BlogItem key={item.id} item={item} postLiked={() => postLiked(item.id)} />
        })}
      </ul>
    )
  }
}

BlogList.defaultProps = {
  items: React.PropTypes.array
}

export default BlogList;
