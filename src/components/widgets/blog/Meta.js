import React from 'react';

import Author from './elements/Author';
import PostDates from './elements/PostDates';
import Like from './elements/Like';

class Meta extends React.Component {
  posted() {
    console.log('text');
  }
  render() {
    const { author, postDates, likeCount } = this.props.meta;
    const { postLiked } = this.props;

    return (
      <div>
        <Author {...author} />
        <PostDates {...postDates} />
        <Like likeCount={likeCount} postLiked={postLiked} />
      </div>
    );

  }
}

Meta.propTypes = {
  author: React.PropTypes.shape({
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string
  }),
  postDates: React.PropTypes.shape({
    createdAt: React.PropTypes.string,
    updatedAt: React.PropTypes.string
  }),
  likeCount: React.PropTypes.number
}

Meta.defaultProps = {
  author: { firstName: 'Anonymous', lastName: 'Anonymous' },
  postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
  likeCount: 0
}

export default Meta;
