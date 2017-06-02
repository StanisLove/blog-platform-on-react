import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, alt, width, height}) => (
  <img src={src} alt={alt} style={{ width, height }} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  src: 'http://proxyprivat.com/images/noimage.jpeg',
  alt: 'No image',
  width: 'auto',
  height: '100px'
};

export default Image;
