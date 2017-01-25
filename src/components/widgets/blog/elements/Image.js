import React from 'react';

const Image = ({src, alt, width, height}) => (
  <img src={src} alt={alt} style={{ width, height }} />
);

Image.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

Image.defaultProps = {
  src: 'http://proxyprivat.com/images/noimage.jpeg',
  alt: 'No image',
  width: '100px',
  height: 'auto'
};

export default Image;
