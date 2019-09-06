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

export interface IAddTodoAction {
  type: TODO_ADD,
  payload: ITodoAddPayload
};

export type IAddTodoActionCreator = (data: ITodoAddPayload) => IAddTodoAction;


export interface ITodoIdPayload {
  id: number
};

export interface IDeleteTodoAction {
  type: TODO_DELETE,
  payload: ITodoIdPayload
}

export type IDeleteTodoActionCreator = (id: number) => IDeleteTodoAction;

export interface IEditTodoAction {
  type: TODO_EDIT,
  payload: ITodo
}

export type IEditTodoActionCreator = (todo: ITodo) => IEditTodoAction;

export const addTodo: IAddTodoActionCreator = data => ({
  type:TODO_ADD,
  payload: data
});

export const deleteTodo: IDeleteTodoActionCreator =  id  => ({
  type:TODO_DELETE,
  payload: {
    id,
  }
});

export const editTodo: IEditTodoActionCreator = todo => ({
  type:TODO_EDIT,
  payload: todo
});


