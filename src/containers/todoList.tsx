import React from 'react';
import { connect } from 'react-redux';
import List from '../components/todoList';
import { IReduxStore, ITodo } from '../types';
import {IDeleteTodoActionCreator, IAddTodoActionCreator, deleteTodo, addTodo} from '../redux/actions/todos';
import TodoForm from '../components/todoForm/add';

interface ITodoListProps {
  todos: Array <ITodo>
  deleteTodo: IDeleteTodoActionCreator,
  addTodo: IAddTodoActionCreator,
};

const TodoList = (props: ITodoListProps) => (
  <div id="todo-list">
    <TodoForm onSubmit={props.addTodo} />
    <List items={props.todos} deleteItem={props.deleteTodo}/>
  </div>
);

const mapStateToProps = (state : IReduxStore)  => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  deleteTodo,
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);