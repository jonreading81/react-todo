import React from 'react';
import { connect } from 'react-redux';
import AddTodoForm from '../components/addTodo/form';
import { addTodo } from '../redux/actions/todos';

const TodoList = ({addTodo}) => (
  <div id="add-todo">
    <h2>Add Todo</h2>
    <AddTodoForm onSubmit={addTodo} />
  </div>
);

export default connect(null, {
  addTodo
})(TodoList);