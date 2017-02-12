import React from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({likeCount, postLiked})  => (
  <div>
    <Button
      onClick={postLiked}
      color='grey'
      content='Like'
      icon='like outline'
      label={{
        basic: true,
        color: 'grey',
        pointing: 'left',
        content: likeCount
      }}
    />
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
