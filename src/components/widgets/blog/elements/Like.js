import React from 'react';

import { Button } from 'semantic-ui-react'

const Like = props  => (
  <div>
    <p>{props.likeCount} people likes this</p>
    <Button onClick={props.postLiked}>I like it</Button>
  </div>
)

Like.propTypes = {
  likeCount: React.PropTypes.number
}

Like.defaultProps = {
  likeCount: 0
}

export default Like;
