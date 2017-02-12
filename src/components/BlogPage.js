import React from 'react';
import request from 'superagent';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import SearchForm from 'components/widgets/blog/SearchForm';
import { get } from 'lodash/object';
import { bind } from 'lodash/function';
import { Grid } from 'semantic-ui-react';
import { ENDPOINT as url } from 'constants/ApiUrl';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], itemsOnPage: [], blogsPerPage: 2 };
    this.postLiked = bind(this.postLiked, this);
    this.changePage = bind(this.changePage, this);
  }

  componentWillMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      `${url}/`,
      {},
      (err, res) => this.setState({
        items: res.body, itemsOnPage: res.body.slice(0, 2)
      })
    );
  }

  changePage(num) {
    const { items, blogsPerPage } = this.state;
    this.setState({
      itemsOnPage: items.slice((num - 1) * blogsPerPage, num * blogsPerPage)
    });
  }

  postLiked(id) {
    const items = this.state.items;
    items.map(obj => { if (obj.id == id) {
      obj.meta.likeCount = get(obj, 'meta.likeCount', 0) + 1;
    } });
    this.setState({ items });
  }

  chartColumns(items) {
    const data = [];

    items.map(obj => {
      data.push([
        obj.title || 'Title',
        obj.meta.likeCount || 0
      ]);
    });
    return { columns: data };
  }

  render() {
    const { items, itemsOnPage, blogsPerPage } = this.state;
    const pagesCount = Math.ceil(items.length / blogsPerPage);
    const chartProps = this.chartColumns(items);

    return (
      <Grid columns={2} relaxed >
        <Grid.Row>
          <SearchForm items={items} />
        </Grid.Row>
        <Grid.Column>
          <BlogList
            itemsOnPage={itemsOnPage}
            pagesCount={pagesCount}
            changePage={this.changePage}
            postLiked={this.postLiked}
          />
        </Grid.Column>

        <Grid.Column>
          <PieChart {...chartProps} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default BlogPage;
