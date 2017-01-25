import React from 'react';
import request from 'superagent';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import SearchForm from 'components/widgets/blog/SearchForm';
import { get } from 'lodash/object';
import { bind } from 'lodash/function';
import { Grid } from 'semantic-ui-react';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.postLiked = bind(this.postLiked, this);
  }

  componentWillMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3011/',
      {},
      (err, res) => this.setState({ items: res.body })
    );
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
    const { items } = this.state;
    const chartProps = this.chartColumns(items);

    return (
      <Grid columns={2} relaxed >
        <Grid.Row>
          <SearchForm items={items} />
        </Grid.Row>
        <Grid.Column>
          <BlogList
            items={items}
            postLiked={this.postLiked}
            blogsPerPage={2}
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
