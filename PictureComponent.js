class Picture extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;

    return React.createElement(
      'img',
      { src, alt, style: { width, height } }
    );
  }
}

Picture.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

Picture.defaultProps = {
  src: 'http://proxyprivat.com/images/noimage.jpeg',
  alt: 'No image',
  width: '100px',
  height: 'auto'
}

ReactDOM.render(
  React.createElement(Picture, {
    src: 'https://facebook.github.io/react/img/logo_og.png',
    alt: 'React picture'
  }),
  document.getElementById('app')
);
