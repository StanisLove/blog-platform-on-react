import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

const Like = ({likeCount, postLiked})  => (
  <div className="like-button">
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
  likeCount: PropTypes.number,
  postLiked: PropTypes.func
};

Like.defaultProps = {
  likeCount: 0
};

export default Like;
