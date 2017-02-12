import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
import Post from 'components/Post';
import About from 'components/About';

import { postsPath, aboutPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
