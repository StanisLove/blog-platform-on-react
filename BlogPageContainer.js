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

const Title = ({ title }) => (
  <h2>{ title }</h2>
);

Title.propTypes = {
  title: React.PropTypes.string
}

Title.defaultProps = {
  title: 'Post'
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

const Like = props  => (
  <div>
    <p>{props.likeCount} people likes this</p>
    <button onClick={props.postLiked}>I like it</button>
  </div>
)

Like.propTypes = {
  likeCount: React.PropTypes.number
}

Like.defaultProps = {
  likeCount: 0
}

class MetaInfo extends React.Component {
  posted() {
    console.log('text');
  }
  render() {
    const { author, postDates, likeCount } = this.props.meta;
    const { postLiked } = this.props;

    return React.createElement(
      'div',
      null
      , React.createElement(Author, author)
      , React.createElement(PostDates, postDates)
      , React.createElement(Like, { likeCount, postLiked })
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
  likeCount: React.PropTypes.number
}

MetaInfo.defaultProps = {
  author: { firstName: 'Anonymous', lastName: 'Anonymous' },
  postDates: { createdAt: 'undefined', updatedAt: 'undefined' },
  likeCount: 0
}

class BlogItem extends React.Component {
  render() {
    const { title, image, text, meta } = this.props.value;
    const { postLiked } = this.props;

    return React.createElement(
      'li',
      null
      , React.createElement(Title, { title })
      , React.createElement(Picture, image)
      , React.createElement(TextBox, { text })
      , React.createElement(MetaInfo, { meta, postLiked })
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
    likeCount: React.PropTypes.number
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

class BlogList extends React.Component {
  render () {
    const { list, postLiked } = this.props;

    return React.createElement(
      'ul',
      { style: { listStyleType: 'none' } },
      list.map(function(value) {
        return React.createElement(
          BlogItem, { key: value.id, value: value, postLiked: () => postLiked(value.id) }
        )
      })
    )
  }
}

BlogList.defaultProps = {
  list: React.PropTypes.array
}

const list = [
  {
    id: 'post_1',
    title: 'React',
    text: 'Some text about React',
    image: {
      src: 'https://facebook.github.io/react/img/logo_og.png',
      alt: 'React picture'
    },
    meta: {
      author: { firstName: 'Ivan', lastName: 'Ivanov' },
      postDates: { createdAt: '2011-01-01', updatedAt: '2011-02-01' },
      likeCount: 5
    }
  },
  {
    id: 'post_2',
    title: 'Babel',
    text: 'Some text about Babel',
    image: {
      src: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      alt: 'Babel picture'
    },
    meta: {
      author: { firstName: 'Bread', lastName: 'Pitt' },
      postDates: { createdAt: '2014-10-08', updatedAt: '2015-01-02' },
      likeCount: 3
    }
  },
  {
    id: 'post_3',
    title: 'Lodash',
    text: 'Some text about Lodash',
    image: {
      src: 'https://babeljs.io/images/users/lodash.svg',
      alt: 'Lodash picture'
    },
    meta: {
      author: { firstName: 'Duke', lastName: 'Nukem' },
      postDates: { createdAt: '1995-08-10', updatedAt: '1996-12-24' }
    }
  }
]

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.pieChart),
      data: {
        columns: this.props.columns,
        type: 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    })
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  componentWillReceiveProps() {
    this.chart.load({
      columns: this.props.columns
    })
  }

  render() {
    return (
      <div ref="pieChart" />
    )
  }
}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list };
    this.postLiked = bind(this.postLiked, this);
  }

  postLiked(id) {
    list.map(obj => { if (obj.id == id) {
      obj.meta.likeCount ? obj.meta.likeCount += 1 : obj.meta.likeCount = 1
    } });
    this.setState({ list });
  }

  chartColumns() {
    const data = [];

    list.map(obj => {
      data.push([
        obj.title ? obj.title : 'Title',
        obj.meta.likeCount ? obj.meta.likeCount : 0
      ])
    });
    return { columns: data }
  }

  render() {
    const { list } = this.state;

    return React.createElement(
      'div',
      null
      , React.createElement(BlogList, { list: list, postLiked: this.postLiked })
      , React.createElement(PieChart, this.chartColumns())
    );
  }
}

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
)

