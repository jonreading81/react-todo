export interface ITodo {
  id: number;
  name: string;
  description: string;
}

export interface IReduxStore {
  todos: Array <ITodo>
}