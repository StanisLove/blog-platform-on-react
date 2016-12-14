class Picture extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;

    return React.createElement(
      'img',
      {
        src: src,
        alt: alt,
        style: { width: width, height: height }
      }
    );
  }
}

ReactDOM.render(
  React.createElement(Picture, {
    src: 'https://facebook.github.io/react/img/logo_og.png',
    width: 'auto',
    height: '100px',
    alt: 'React picture'
  }),
  document.getElementById('app')
);
