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
      'li',
      null,
      React.createElement(Picture, { src, alt }),
      React.createElement(TextBox, { string })
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
    src: 'https://facebook.github.io/react/img/logo_og.png',
    alt: 'React picture',
    string: 'Some text about React'
  },
  {
    src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
    alt: 'Babel picture',
    string: 'Some text about Babel'
  },
  {
    src: 'https://babeljs.io/images/users/lodash.svg',
    alt: 'Lodash picture',
    string: 'Some text about Lodash'
  }
]

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list };
  }

  render() {
    const { list } = this.state;
    return React.createElement(BlogList, { list });
  }
}

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
