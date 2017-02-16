import { combineReducers } from 'redux';
import posts from './Posts';
import post from './Post';
import about from './About';

export default combineReducers({
  posts,
  post,
  about
});
