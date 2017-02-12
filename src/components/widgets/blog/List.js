import React, { PropTypes } from 'react';

import BlogItem from './Item';

import Pagination from './Pagination';

const BlogList = ({itemsOnPage, pagesCount, postLiked, changePage}) => (
  <div>
    {
      itemsOnPage.map(item =>
        <BlogItem
          key={item.id}
          item={item}
          postLiked={() => postLiked(item.id)}
        />
      )
    }
    <Pagination
      pagesCount={pagesCount}
      changePage={changePage}
    />
  </div>
);

BlogList.propTypes = {
  itemsOnPage: PropTypes.array,
  pagesCount: PropTypes.number,
  changePage: PropTypes.func,
  postLiked: PropTypes.func
};

export default BlogList;
