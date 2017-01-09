export const items = [
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
