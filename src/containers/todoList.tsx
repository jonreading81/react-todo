import React from 'react';
import { connect } from 'react-redux';
import List from '../components/todoList';
import { IReduxStore, ITodo } from '../types';

interface ITodoListProps {
  todos: Array <ITodo>
};

const TodoList = (props: ITodoListProps) => (
  <div id="todo-list">
    <h2>Todo List</h2>
    <List items={props.todos} />
  </div>
);

const mapStateToProps = (state : IReduxStore) : ITodoListProps => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(TodoList);