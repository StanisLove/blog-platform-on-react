import { combineReducers } from 'redux';
import posts from './Posts';
import post from './Post';
import about from './About';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts,
  post,
  about,
  form: formReducer
});
