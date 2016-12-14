class Picture extends React.Component {
  render() {
    const { src, alt } = this.props;

    return React.createElement(
      'img',
      {
        src: src,
        alt: alt,
        style: { width: '100px', height: 'auto' }
      }
    );
  }
}

const TextBox = ({ string }) => (
  React.DOM.span(null, `${ string }`)
);

class BlogItem extends React.Component {
  render() {
    const { src, alt, string } = this.props;

    return React.createElement(
      'div',
      null,
      React.createElement(Picture, { src, alt }),
      React.createElement(TextBox, { string })
    )
  }
}

ReactDOM.render(
  React.createElement(BlogItem, {
    src: 'https://facebook.github.io/react/img/logo_og.png',
    alt: 'React picture',
    string: 'Some text about React'
  }),
  document.getElementById('app_1')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
    alt: 'Babel picture',
    string: 'Some text about Babel'
  }),
  document.getElementById('app_2')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    src: 'https://babeljs.io/images/users/lodash.svg',
    alt: 'Lodash picture',
    string: 'Some text about Lodash'
  }),
  document.getElementById('app_3')
);
