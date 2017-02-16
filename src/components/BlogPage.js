import React, { PropTypes } from 'react';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import SearchForm from 'components/widgets/blog/SearchForm';
import { Grid } from 'semantic-ui-react';
import { blogsPerPage } from 'constants/blogsPerPage';

const BlogPage = ({items, itemsOnPage, postLiked, changePage}) => {
  const pagesCount = Math.ceil(items.length / blogsPerPage);

  const chartColumns = (items) => {
    const data = [];

    items.map(obj => {
      data.push([
        obj.title || 'Title',
        obj.meta.likeCount || 0
      ]);
    });
    return { columns: data };
  };

  return (
    <Grid columns={2} relaxed >
      <Grid.Row>
        <SearchForm items={items} />
      </Grid.Row>
      <Grid.Column>
        <BlogList
          itemsOnPage={itemsOnPage}
          pagesCount={pagesCount}
          changePage={changePage}
          postLiked={postLiked}
        />
      </Grid.Column>

      <Grid.Column>
        <PieChart {...chartColumns(items)} />
      </Grid.Column>
    </Grid>
  );
};

BlogPage.propTypes = {
  items:       PropTypes.array,
  itemsOnPage: PropTypes.array,
  postLiked:   PropTypes.func,
  changePage:  PropTypes.func
};

export default BlogPage;
