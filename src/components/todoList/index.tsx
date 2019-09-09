import React from 'react';
import {ITodo} from './../../types';
import { Link } from 'react-router-dom';
import styles from './todoList.module.scss';

interface TodoListProps {
  items: Array<ITodo>,
  deleteItem: (id: number) => any;
}
 
const TodoList: React.SFC <TodoListProps> = ({items, deleteItem}) => (
  <ul className={styles.list}>
  {items.map((item: ITodo) => (
    <li className={styles.item} key={item.id}>
      <Link to={`/edit/${item.id}`}>{item.name}</Link>
      <p>{item.description}</p>
      <i onClick={() => deleteItem(item.id)} 
        className="delete-item fa fa-trash" 
        aria-hidden="true" 
      />
    </li>
  ))}
  </ul>
);

export default TodoList;