import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo } from './actions/todo_actions';
import { receiveTodos } from './actions/todo_actions';
import Root from './components/root';

//DELETE THIS
import allTodos from './reducers/selectors'
import TodoList from './components/todos/todo_list'

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={configureStore()}/>, root);
})


//DELETE THIS
window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
window.TodoList = TodoList;