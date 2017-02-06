import React, { PropTypes } from 'react';
import { Item } from  'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import request from 'superagent';
import { get } from 'lodash/object';
import { bind } from 'lodash/function';
import { ENDPOINT as url } from 'constants/ApiUrl';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: undefined };
    this.postLiked = bind(this.postLiked, this);
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request.get(
      `${url}/`,
      {},
      (err, res) => {
        if (!err) {
          this.setState({ item: res.body[this.props.params.id - 1] });
        }
      }
    );
  }

  postLiked() {
    const item = this.state.item;
    item.meta.likeCount = get(item, 'meta.likeCount', 0) + 1;
    this.setState({ item });
  }

  render() {
    return (
      <Item.Group>
        <BlogItem item={this.state.item} postLiked={this.postLiked} />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
