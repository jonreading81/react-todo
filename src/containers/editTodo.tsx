import React from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/todoForm/edit';
import { editTodo, IEditTodoActionCreator } from '../redux/actions/todos';
import {ITodo, IReduxStore} from '../types'
import {
  RouteComponentProps
} from "react-router-dom";


interface IEditTodoProps {
  editTodo: IEditTodoActionCreator,
  todo?: ITodo,
};

type RouteParams = { id: string };

const EditTodoContainer  = (props: IEditTodoProps) => (
  <div id="edit-todo">
    <h2>Edit Todo</h2>
    <TodoForm onSubmit={props.editTodo} initialValues={props.todo} />
  </div>
);

const mapStateToProps = (state: IReduxStore, { match } : RouteComponentProps<RouteParams>) => {
    const todo = state.todos.find((item: ITodo) => item.id === parseInt(match.params.id));
    return {
      todo
    };
};

export default connect(mapStateToProps, {
  editTodo,
})(EditTodoContainer);