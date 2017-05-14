import MainLayout from 'components/layouts/MainLayout';

import { postsPath, aboutPath, contactsPath, editPath } from 'helpers/routes';
import { fetchPosts } from 'actions/posts/Posts';
import { fetchPost } from 'actions/post/Post';
import { fetchAbout } from 'actions/About';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import AboutContainer from 'containers/AboutContainer';
import EditPostContainer from 'containers/EditPostContainer';
import Contacts from 'components/views/Contacts';
import initialLoad from 'helpers/initialLoad';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchAbout());
  }
};

const ContactsRoute = {
  path: contactsPath(),
  component: Contacts
};

const EditPostRoute = {
  path: editPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    ContactsRoute,
    EditPostRoute
  ]
};
