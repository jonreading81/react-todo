import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
} from '../types/todos';

import { ITodo } from '../../types';

const todo = (id: number, name: string, description: string) : ITodo => ({
  id, 
  name,
  description
});

const initalTodoItems: Array<ITodo> = [
  todo(1, 'test-1', 'details'),
  todo(2, 'test-2', 'details'),
  todo(3, 'test-3', 'details'),
]

const todos = (state: Array<ITodo> = initalTodoItems, action: any ) : Array<ITodo> => {
  const newState = Array.from(state);
  const {payload} = action;
  
  switch (action.type) {
    case TODO_ADD: 
      const id = Math.max(...state.map(item => item.id)) + 1;
      const { name, description} = payload;
      const item = todo(id,name, description);
      newState.push(item);
      return newState;

    case TODO_DELETE:
      return newState.filter(({id}) => id !== payload.id);
    
    case TODO_EDIT:  
      return newState.map(item => item.id === payload.id ? payload : item);

    default:
      return newState;
  }
}

export default todos;