import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_TODO } from "../actions/todo_actions";
import { receiveTodo } from "../actions/todo_actions";
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      //action.todos === array of todos
      const todosObject = {};
      action.todos.forEach((el) => {
        todosObject[el.id] = el;
      });
      return todosObject;
    case RECEIVE_TODO:
      let newTodo = {};
      newTodo[action.todo.id] = (action.todo);
      newTodo = Object.assign(newTodo, state);
      // newTodo = merge(newTodo, state);
      return newTodo;
    default: 
      return state; 

  }
};

export default todosReducer;