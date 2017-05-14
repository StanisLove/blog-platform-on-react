import React, { PropTypes } from 'react';
import BlogItem from './BlogItem';
import Pagination from './Pagination';

const BlogList = ({itemsOnPage, pagesCount, updatePost, changePage}) => (
  <div>
    {
      itemsOnPage.map(item =>
        <BlogItem
          key={item.id}
          item={item}
          postLiked={() => updatePost({id: item.id, postLiked: true})}
          comments={item.comments}
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
  updatePost: PropTypes.func
};

export default BlogList;
