import React from 'react';
import { connect } from 'react-redux';
import List from '../components/todoList';
import { IReduxStore, ITodo } from '../types';
import {IDeleteTodoActionCreator, deleteTodo} from '../redux/actions/todos';

interface ITodoListProps {
  todos: Array <ITodo>
  deleteTodo: IDeleteTodoActionCreator
};

const TodoList = (props: ITodoListProps) => (
  <div id="todo-list">
    <h2>Todo List</h2>
    <List items={props.todos} deleteItem={props.deleteTodo}/>
  </div>
);

const mapStateToProps = (state : IReduxStore)  => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);