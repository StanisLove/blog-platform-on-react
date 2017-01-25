import React, { PropTypes } from 'react';
import { Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

import Title from './elements/Title';
import TextBox from './elements/TextBox';
import Meta from './Meta';
import { postsPath } from 'helpers/routes';

const BlogItem = ({item, postLiked}) => (
  <Item>
    <Link to={postsPath(item.id)}>
      <Image {...item.image} floated='left' />
      <Item.Header>
        <Title title={item.title} />
      </Item.Header>
    </Link>
    <TextBox text={item.text} />
    <Meta meta={item.meta} postLiked={postLiked} />
  </Item>
);

BlogItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }),
    text: PropTypes.string,
    meta: PropTypes.shape({
      author: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
      postDates: PropTypes.shape({
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string
      }),
      likeCont: PropTypes.number
    })
  }),
  postLiked: PropTypes.func
};

BlogItem.defaultProps = {
  item: {
    image: {
      src: 'http://proxyprivat.com/images/noimage.jpeg',
      alt: 'No image'
    },
    text: 'You can add some text',
    meta: {
      author: { firstName: 'Anonymous', lastName: 'Anonymous' },
      postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
      likeCount: 0
    }
  }
};

export default BlogItem;
