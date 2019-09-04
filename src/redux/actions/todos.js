import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT
} from '../types/todos';

const addTodo = data => ({
  type:TODO_ADD,
  payload: data
});

const deleteTodo = id => ({
  type:TODO_DELETE,
  payload: {
    id
  }
});

const editTodo = (payload) => ({
  type:TODO_EDIT,
  payload: payload
});

export {
  addTodo,
  deleteTodo,
  editTodo
};