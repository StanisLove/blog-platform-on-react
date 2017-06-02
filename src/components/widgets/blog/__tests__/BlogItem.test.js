import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { fakeStore } from 'helpers/fakeStore';

import BlogItem from '../BlogItem';
import Title from '../elements/Title';

describe('BlogItem', () => {
  it('returns without crashing', () => {
    const div = document.createElement('div');
    const store = fakeStore({});
    ReactDOM.render(
      <Provider store={store}>
        <BlogItem />
      </Provider>,
      div
    );
  });
});

describe('render', () => {
  const blogItemProps = { title: 'Some title', id: 5 };
  const blogItem = shallow(<BlogItem item={blogItemProps} />);

  it('should render link', () => {
    const path = `/posts/${blogItemProps.id}`;
    const link = blogItem.find('Link').first();

    expect(link.props().to).toEqual(path);
  });

  it('should render title', () => {
    const title = <Title title={blogItemProps.title} />;

    expect(blogItem.contains(title)).toEqual(true);
  });

  it('render dumb component', () => {
    expect(blogItem).toMatchSnapshot();
  });
});
