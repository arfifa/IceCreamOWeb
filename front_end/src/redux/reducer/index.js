import { combineReducers } from 'redux';

import auth from './auth';
import item from './item';
import review from './review';
import cart from './cart';
import user from './user';

const appReducer = combineReducers({
  auth,
  item,
  review,
  cart,
  user
})

export default appReducer;