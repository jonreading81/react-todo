import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/todoForm/reduxForm';
import { addTodo, IAddTodoActionCreator } from '../redux/actions/todos';


interface IAddTodoProps {
  addTodo: IAddTodoActionCreator
};

const AddTodoContainer  = (props: IAddTodoProps) => (
  <div id="add-todo">
    <h2>Add Todo</h2>
    <TodoForm onSubmit={props.addTodo} />
  </div>
);

export default connect(null, {
  addTodo,
})(AddTodoContainer);