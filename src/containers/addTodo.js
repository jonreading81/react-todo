import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/todoForm/reduxForm';
import { addTodo } from '../redux/actions/todos';

const TodoList = ({ addTodo }) => (
  <div id="add-todo">
    <h2>Add Todo</h2>
    <TodoForm onSubmit={addTodo} />
  </div>
);

export default connect(null, {
  addTodo
})(TodoList);