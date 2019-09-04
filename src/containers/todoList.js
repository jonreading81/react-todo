import React from 'react';
import { connect } from 'react-redux';
import List from '../components/todoList';

const TodoList = ({todos}) => (
  <div id="todo-list">
    <h2>Todo List</h2>
    <List items={todos} />
  </div>
);

const mapStateToProps = ({todos}) => ({
  todos,
})

export default connect(mapStateToProps)(TodoList);