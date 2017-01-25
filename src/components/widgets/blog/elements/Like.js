import React from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({likeCount, postLiked})  => (
  <div>
    <p>{likeCount} people likes this</p>
    <Button onClick={postLiked}>I like it</Button>
  </div>
);

Like.propTypes = {
  likeCount: React.PropTypes.number,
  postLiked: React.PropTypes.func
};

Like.defaultProps = {
  likeCount: 0
};

export default Like;
