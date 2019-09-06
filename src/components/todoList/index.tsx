import React from 'react';
import {ITodo} from './../../types';

interface TodoListProps {
  items: Array<ITodo>,
 }
 
const TodoList: React.SFC <TodoListProps> = ({items}) => (
  <ul>
  {items.map((item: ITodo) => (
    <li key={item.id}>{item.name}</li>
  ))}
  </ul>
);

export default TodoList;