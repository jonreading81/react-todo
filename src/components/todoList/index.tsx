import React from 'react';
import {ITodo} from './../../types';
import { Link } from 'react-router-dom';

interface TodoListProps {
  items: Array<ITodo>,
  deleteItem: (id: number) => any;
}
 
const TodoList: React.SFC <TodoListProps> = ({items, deleteItem}) => (
  <ul>
  {items.map((item: ITodo) => (
    <li key={item.id}>
      <Link to={`/edit/${item.id}`}>{item.name}</Link>
      <i onClick={() => deleteItem(item.id)} 
        className="delete-item fa fa-trash" 
        aria-hidden="true" 
      />
    </li>
  ))}
  </ul>
);

export default TodoList;