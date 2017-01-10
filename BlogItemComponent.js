const { bind } = _;

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


const TextBox = ({ text }) => (
  React.DOM.span(null, `${ text }`)
);

TextBox.propTypes = {
  text: React.PropTypes.string
}

TextBox.defaultProps = {
  text: 'You can add some text'
}

const Author = ({ firstName, lastName }) => (
  React.DOM.p(null, `${firstName} ${lastName}`)
);

Author.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string
}

Author.defaultProps = {
  firstName: 'Anonymous',
  lastName: 'Anonymous'
}

function formatDate(date) {
  return moment(date).format('DD.MM.YYYY');
}

const PostDates = ({ createdAt, updatedAt }) => (
  React.DOM.div(
    null,
    React.DOM.p(null, `Created: ${formatDate(createdAt)}`),
    React.DOM.p(null, `Updated: ${formatDate(updatedAt)}`)
    )
);

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count, hide: false }
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1, hide: true });
  }

  render() {
    const style = {};
    if (this.state.hide) {
      style.display = 'none'
    };

    return (
      <div>
        <p>{this.state.count} people likes this</p>
        <button onClick={this.handleClick} style={style}>I like it</button>
      </div>
    )
const PostDates = ({ createdAt, updatedAt }) => (
  React.DOM.div(
    null,
    React.DOM.p(null, `Created: ${moment(createdAt).format('LLL')}`),
    React.DOM.p(null, `Updated: ${moment(updatedAt).format('LLL')}`)
    )
);
  }
}

Like.propTypes = {
  count: React.PropTypes.number
}

Like.defaultProps = {
  count: 0
}

class MetaInfo extends React.Component {
  render() {
    const { author, postDates, likeCount } = this.props;

    return React.createElement(
      'div',
      null
      , React.createElement(Author, author)
      , React.createElement(PostDates, postDates)
      , React.createElement(Like, likeCount)
    )
  }
}

MetaInfo.propTypes = {
  author: React.PropTypes.shape({
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string
  }),
  postDates: React.PropTypes.shape({
    createdAt: React.PropTypes.string,
    updatedAt: React.PropTypes.string
  }),
  likeCount: React.PropTypes.shape({
    count: React.PropTypes.number
  })
}

MetaInfo.defaultProps = {
  author: { firstName: 'Anonymous', lastName: 'Anonymous' },
  postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
  likeCount: { count: 0 }
}

class BlogItem extends React.Component {
  render() {
    const { image, text, meta } = this.props;

    return React.createElement(
      'div',
      null
      , React.createElement(Picture, image)
      , React.createElement(TextBox, { text })
      , React.createElement(MetaInfo, meta)
    )
  }
}

BlogItem.propTypes = {
  image: React.PropTypes.shape({
    src: React.PropTypes.string
    alt: React.PropTypes.string
  }),
  text: React.PropTypes.string,
  meta: React.PropTypes.shape({
    author: React.PropTypes.shape({
      firstName: React.PropTypes.string,
      lastName: React.PropTypes.string
    }),
    postDates: React.PropTypes.shape({
      createdAt: React.PropTypes.string,
      updatedAt: React.PropTypes.string
    }),
    likeCount: React.PropTypes.shape({
      count: React.PropTypes.number
    })
}

BlogItem.defaultProps = {
  image: { src: 'http://proxyprivat.com/images/noimage.jpeg', alt: 'No image'},
  text: 'You can add some text',
  meta: {
    author: { firstName: 'Anonymous', lastName: 'Anonymous' },
    postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
    likeCount: { count: 0 }
  }
}
ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about React',
    image: {
      src: 'https://facebook.github.io/react/img/logo_og.png',
      alt: 'React picture'
    },
    meta: {
      author: { firstName: 'Ivan', lastName: 'Ivanov' },
      postDates: { createdAt: '2011-01-01', updatedAt: '2011-02-01' },
      likeCount: { count: 5 }
    }
  }),
  document.getElementById('app_1')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about Babel',
    image: {
      src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      alt: 'Babel picture'
    },
    meta: {
      author: { firstName: 'Bread', lastName: 'Pitt' },
      postDates: { createdAt: '2014-10-08', updatedAt: '2015-01-02' }
    }
  }),
  document.getElementById('app_2')
);
ReactDOM.render(
  React.createElement(BlogItem, {
    text: 'Some text about Lodash',
    image: {
      src: 'https://babeljs.io/images/users/lodash.svg',
      alt: 'Lodash picture'
    },
    meta: {
      author: { firstName: 'Duke', lastName: 'Nukem' },
      postDates: { createdAt: '1995-08-10', updatedAt: '1996-12-24' }
    }
  }),
  document.getElementById('app_3')
);


