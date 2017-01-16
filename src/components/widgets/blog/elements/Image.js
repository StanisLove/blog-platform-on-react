import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt } = this.props;
    const style = {
      width: this.props.width,
      height: this.props.height
    }

    return (
      <img src={src} alt={alt} style={style} />
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

Image.defaultProps = {
  src: 'http://proxyprivat.com/images/noimage.jpeg',
  alt: 'No image',
  width: '100px',
  height: 'auto'
}

export default Image;
