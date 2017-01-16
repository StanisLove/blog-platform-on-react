import React from 'react';

const Title = ({title}) => (
  <h2>{title}</h2>
);

Title.propTypes = {
  title: React.PropTypes.string
}

Title.defaultProps = {
  title: 'Post'
}

export default Title;
