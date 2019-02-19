import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo } from './actions/todo_actions'
import { receiveTodos } from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
})

window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;