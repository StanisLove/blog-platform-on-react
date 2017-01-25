import React from 'react';

import { items as items} from 'constants/static/items';

import BlogList from 'components/widgets/blog/List';

import PieChart from 'components/widgets/blog/PieChart';

import { get } from 'lodash/object';

import { bind } from 'lodash/function';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
    this.postLiked = bind(this.postLiked, this);
  }

  postLiked(id) {
    items.map(obj => { if (obj.id == id) {
      obj.meta.likeCount = get(obj, 'meta.likeCount', 0) + 1;
    } });
    this.setState({ items });
  }

  chartColumns() {
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
    const chartProps = this.chartColumns();

    return (
      <div>
        <BlogList items={items} postLiked={this.postLiked} />
        <PieChart {...chartProps} />
      </div>
    );
  }
}

export default BlogPage;
