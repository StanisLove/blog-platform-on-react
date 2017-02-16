import MainLayout from 'components/layouts/MainLayout';

import { postsPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/posts/Posts';
import { fetchPost } from 'actions/post/Post';
import { fetchAbout } from 'actions/About';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import AboutContainer from 'containers/AboutContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutContainer,
  prepareData: (store) => {
    store.dispatch(fetchAbout());
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
