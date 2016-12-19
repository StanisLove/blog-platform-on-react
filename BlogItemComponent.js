class Picture extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;

    return React.createElement(
      'img',
      { src, alt, style: { width, height  } }
    );
  }
}

const TextBox = ({ text }) => (
  React.DOM.span(null, `${ text }`)
);

class BlogItem extends React.Component {
  render() {
    const { image, text } = this.props;

    return React.createElement(
      'div',
      null,
      React.createElement(Picture, image)
      React.createElement(TextBox, { text })
    )
  }
}

ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about React',
    image: {
      src: 'https://facebook.github.io/react/img/logo_og.png',
      alt: 'React picture',
      width: '100px',
      height: 'auto'
    }
  }),
  document.getElementById('app_1')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about Babel',
    image: {
      src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      alt: 'Babel picture',
      width: '100px',
      height: 'auto'
    }
  }),
  document.getElementById('app_2')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about Lodash',
    image: {
      src: 'https://babeljs.io/images/users/lodash.svg',
      alt: 'Lodash picture',
      width: '100px',
      height: 'auto'
    }
  }),
  document.getElementById('app_3')
);
