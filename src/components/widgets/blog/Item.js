import React from 'react';

import Title from './elements/Title';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Meta from './Meta';

class BlogItem extends React.Component {
  render() {
    const { title, image, text, meta } = this.props.item;
    const { postLiked } = this.props;

    return (
      <li>
        <Title title={title} />
        <Image {...image} />
        <TextBox text={text} />
        <Meta meta={meta} postLiked={postLiked} />
      </li>
    );
  }
}

BlogItem.propTypes = {
  image: React.PropTypes.shape({
    src: React.PropTypes.string,
    alt: React.PropTypes.string
  }),
  text: React.PropTypes.string,
  meta: React.PropTypes.shape({
    author: React.PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string
    }),
    postDates: React.PropTypes.shape({
      createdAt: React.PropTypes.string,
      updatedAt: React.PropTypes.string
    }),
    likeCont: React.PropTypes.number
  })
}

BlogItem.defaultProps = {
  image: { src: 'http://proxyprivat.com/images/noimage.jpeg', alt: 'No image'},
  text: 'You can add some text',
  meta: {
    author: { firstName: 'Anonymous', lastName: 'Anonymous' },
    postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
    likeCount: 0
  }
}

export default BlogItem;
