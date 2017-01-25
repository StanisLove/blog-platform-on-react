import React, { PropTypes } from 'react';

import BlogItem from './Item';

import { bind } from 'lodash/function';

import Pagination from './Pagination';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsOnPage: [] };
    this.changePage = bind(this.changePage, this);
  }

  changePage(num) {
    const { items, blogsPerPage } = this.props;
    this.setState({
      itemsOnPage: items.slice((num - 1) * blogsPerPage, num * blogsPerPage)
    });
  }

  render() {
    const { items, blogsPerPage, postLiked } = this.props;
    const pagesCount = Math.ceil(items.length / blogsPerPage);
    const itemsOnPage = this.state.itemsOnPage.length > 0 ?
      this.state.itemsOnPage : items.slice(0,2);

    return (
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            {
              itemsOnPage.map(item =>
                <BlogItem
                  key={item.id}
                  item={item}
                  postLiked={() => postLiked(item.id)}
                />
              )
            }
          </li>
        </ul>
        <Pagination
          pagesCount={pagesCount}
          changePage={this.changePage}
        />
      </div>
    );
  }
}

BlogList.propTypes = {
  blogsPerPage: PropTypes.number,
  items: PropTypes.array,
  postLiked: PropTypes.func
};

export default BlogList;
