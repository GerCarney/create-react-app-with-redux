import * as types from '../actions/action-types';

export default (state = [], action) => {

  switch (action.type) {
    case types.ADD_TODO:
      return [...state, {text:action.text, id:action.id}];
    case types.REMOVE_TODO:
        return state.filter(item=>{
          return item.id != action.id
        })

    default:
      return state;
  }
};
