import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT
} from '../types/todos';

import { ITodo } from '../../types';

export interface ITodoAddPayload {
  name: string,
  description: string
};

export interface ITodoIdPayload {
  id: number
};

export interface IAddTodoAction {
  type: TODO_ADD,
  payload: ITodoAddPayload
};

export interface IDeleteTodoAction {
  type: TODO_DELETE,
  payload: ITodoIdPayload
}

export interface IEditTodoAction {
  type: TODO_EDIT,
  payload: ITodo
}

export const addTodo = (data: ITodoAddPayload) : IAddTodoAction => ({
  type:TODO_ADD,
  payload: data
});

export const deleteTodo = (id: number) : IDeleteTodoAction => ({
  type:TODO_DELETE,
  payload: {
    id,
  }
});

export const editTodo = (payload: ITodo) : IEditTodoAction => ({
  type:TODO_EDIT,
  payload: payload
});


