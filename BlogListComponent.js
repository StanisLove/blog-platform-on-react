class Picture extends React.Component {
  render() {
    const { src, alt, width, height } = this.props;

    return React.createElement(
      'img',
      { src, alt, style: { width, height } }
    );
  }
}

const TextBox = ({ text }) => (
  React.DOM.span(null, `${ text }`)
);

class BlogItem extends React.Component {
  render() {
    const { text, image } = this.props;

    return React.createElement(
      'li',
      null,
      React.createElement(Picture, image),
      React.createElement(TextBox, { text })
    )
  }
}

class BlogList extends React.Component {
  render () {
    return React.createElement(
      'ul',
      null,
      this.props.list.map(function(value) {
        return React.createElement(BlogItem, value)
      })
    )
  }
}

const list = [
  {
    text: 'Some text about React',
    image: {
      src: 'https://facebook.github.io/react/img/logo_og.png',
      alt: 'React picture',
      width: '100px',
      height: 'auto'
    }
  },
  {
    text: 'Some text about Babel',
    image: {
      src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      alt: 'Babel picture',
      width: '100px',
      height: 'auto'
    }
  },
  {
    text: 'Some text about Lodash',
    image: {
      src: 'https://babeljs.io/images/users/lodash.svg',
      alt: 'Lodash picture',
      width: '100px',
      height: 'auto'
    }
  }
]

ReactDOM.render(
  React.createElement(BlogList, { list }),
  document.getElementById('app')
);

