import { combineReducers } from 'redux';
import Todos from './todos';
import ActiveTodo from './ActiveTodo.js';

const rootReducer = combineReducers({
  Todo: Todos,
  activeTodo: ActiveTodo,
});

export default rootReducer;
