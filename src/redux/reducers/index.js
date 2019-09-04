import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import todos from './todos';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  todos,
  form,
})
export default createRootReducer