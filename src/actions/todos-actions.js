import * as types from './action-types';
import uuidv4 from 'uuid'

export const addTodo = (todo, id) => {
  return {
    type: types.ADD_TODO,
    text:todo,
    id:uuidv4()
  };
}
